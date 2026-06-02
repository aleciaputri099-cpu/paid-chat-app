import React from 'react';
import { FiPhone, FiPhoneOff } from 'react-icons/fi';

const IncomingCallModal = ({ caller, onAnswer, onDecline, callType }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-pulse">
        <div className="text-center mb-6">
          <img src={caller.avatar} alt={caller.username} className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">{caller.username}</h2>
          <p className="text-gray-600 mt-2">{callType === 'video' ? '📹 Video Call' : '🎤 Audio Call'}</p>
        </div>
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 font-semibold">Incoming {callType} call...</p>
          <p className="text-sm text-gray-500 mt-2">{callType === 'video' ? 'Costs 2 coins/min' : 'Costs 1 coin/min'}</p>
        </div>
        <div className="flex gap-4">
          <button onClick={onDecline} className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-full">
            <FiPhoneOff /> Decline
          </button>
          <button onClick={onAnswer} className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-full">
            <FiPhone /> Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomingCallModal;