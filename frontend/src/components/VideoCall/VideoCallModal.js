import React, { useState, useEffect, useRef } from 'react';
import { FiPhone, FiPhoneOff, FiVideo, FiMic } from 'react-icons/fi';

const VideoCallModal = ({ callData, onClose, onCallEnd, socket }) => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const [coinCost, setCoinCost] = useState(0);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const durationIntervalRef = useRef(null);

  useEffect(() => {
    initializeCall();
    return () => {
      if (durationIntervalRef.current) clearInterval(durationIntervalRef.current);
      stopAllStreams();
    };
  }, []);

  const initializeCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: callData.callType === 'video'
      });
      setLocalStream(stream);
      if (localVideoRef.current) localVideoRef.current.srcObject = stream;
      startCallDuration();
    } catch (error) {
      console.error('Error accessing media:', error);
      alert('Unable to access camera/microphone');
      onClose();
    }
  };

  const startCallDuration = () => {
    durationIntervalRef.current = setInterval(() => {
      setCallDuration(prev => {
        const newDuration = prev + 1;
        const coinsPerSecond = callData.coinsPerMinute / 60;
        setCoinCost(Math.ceil(newDuration * coinsPerSecond));
        return newDuration;
      });
    }, 1000);
  };

  const stopAllStreams = () => {
    if (localStream) localStream.getTracks().forEach(track => track.stop());
    if (remoteStream) remoteStream.getTracks().forEach(track => track.stop());
  };

  const toggleAudio = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach(track => track.enabled = !audioEnabled);
      setAudioEnabled(!audioEnabled);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach(track => track.enabled = !videoEnabled);
      setVideoEnabled(!videoEnabled);
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    stopAllStreams();
    onCallEnd({ duration: callDuration, coinsDeducted: coinCost });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="w-full h-full max-w-6xl flex flex-col bg-black">
        <div className="flex-1 flex gap-4 p-4 relative">
          <div className="flex-1 bg-black rounded-lg overflow-hidden">
            {remoteStream ? (
              <video ref={remoteVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-white text-lg">Waiting for call...</p>
              </div>
            )}
          </div>
          <div className="absolute bottom-6 right-6 w-40 h-40 bg-black rounded-lg overflow-hidden border-2 border-blue-500">
            {localStream && callData.callType === 'video' ? (
              <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover transform scale-x-[-1]" />
            ) : (
              <div className="w-full h-full flex items-center justify-center"><p className="text-2xl">🎤</p></div>
            )}
          </div>
        </div>
        <div className="bg-gray-900 px-8 py-6 flex items-center justify-between">
          <div className="text-white">
            <p className="text-lg font-semibold">Call in progress</p>
            <p className="text-sm text-gray-400">{formatDuration(callDuration)}</p>
          </div>
          <div className="flex gap-4">
            {callData.callType === 'video' && (
              <button onClick={toggleVideo} className={`p-4 rounded-full transition ${videoEnabled ? 'bg-gray-700' : 'bg-red-500'} text-white`}>
                <FiVideo />
              </button>
            )}
            <button onClick={toggleAudio} className={`p-4 rounded-full transition ${audioEnabled ? 'bg-gray-700' : 'bg-red-500'} text-white`}>
              <FiMic />
            </button>
            <button onClick={handleEndCall} className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600">
              <FiPhoneOff />
            </button>
          </div>
          <div className="text-right text-white">
            <p className="text-2xl font-bold text-yellow-400">{coinCost} 🪙</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCallModal;