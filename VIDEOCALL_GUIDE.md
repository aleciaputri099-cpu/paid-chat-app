# 🎥 Video Call Feature Guide

## Overview

Aplikasi sekarang mendukung video call dan audio call berbayar:
- **Video Call**: 2 koin per menit
- **Audio Call**: 1 koin per menit

## Features

✅ Real-time video and audio calls using WebRTC
✅ Coin-based payment system
✅ Call quality selection
✅ Audio/Video toggle
✅ Call history tracking
✅ Real-time coin deduction
✅ Call statistics

## API Endpoints

### Initiate Call
```
POST /api/videocalls/initiate
Body: { receiverId, callType: 'video'|'audio', quality: 'low'|'medium'|'high' }
```

### Answer Call
```
POST /api/videocalls/:callId/answer
```

### Decline Call
```
POST /api/videocalls/:callId/decline
```

### End Call
```
POST /api/videocalls/:callId/end
```

### Get History
```
GET /api/videocalls/history?page=1&limit=20
```

### Get Statistics
```
GET /api/videocalls/stats
```

## Socket.IO Events

### Client to Server
- `incoming-call` - Notify incoming call
- `call-accepted` - Accept call
- `join-call` - Join video room
- `ice-candidate` - Send ICE candidate
- `offer` - Send WebRTC offer
- `answer` - Send WebRTC answer
- `toggle-audio` - Mute/unmute
- `toggle-video` - Enable/disable video
- `leave-call` - End call

### Server to Client
- `call-incoming` - Incoming call notification
- `call-accepted-notification` - Call accepted
- `user-joined-call` - User joined
- `ice-candidate` - Receive ICE candidate
- `offer` - Receive offer
- `answer` - Receive answer
- `audio-toggled` - Audio toggled
- `video-toggled` - Video toggled
- `user-left` - User left call

## Coin Deduction

1. Calculate duration in minutes (rounded up)
2. Multiply by coinsPerMinute
3. Deduct from caller's balance
4. Record transaction

## Browser Support

- Chrome 56+: ✅
- Firefox 55+: ✅
- Safari 11+: ✅
- Edge 79+: ✅

## Requirements

- HTTPS connection
- Modern browser with WebRTC
- Camera and microphone
- Sufficient coin balance
