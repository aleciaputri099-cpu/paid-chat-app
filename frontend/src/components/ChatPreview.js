import React, { useState } from 'react';
import { ChatPayLogoPremium } from '../Logo/ChatPayLogos';

const ChatPreview = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Hey! How are you?' },
    { id: 2, sender: 'other', text: 'I am good! Want to chat?' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'user', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full p-1">
            <ChatPayLogoPremium />
          </div>
          <div>
            <h3 className="font-bold">Sarah Johnson</h3>
            <p className="text-xs text-blue-100">Online</p>
          </div>
        </div>
      </div>
      <div className="h-80 overflow-y-auto bg-gray-50 p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 border'}`}>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex space-x-2">
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type a message..." className="flex-1 border rounded-lg px-4 py-2" />
          <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPreview;