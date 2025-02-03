import React, { useState } from 'react';
import { MessageSquare, Phone, Send, Video } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sent: boolean;
  time: string;
}

const initialMessages: Message[] = [
  { id: 1, text: "Hey, how are you?", sent: false, time: "10:30 AM" },
  { id: 2, text: "I'm good, thanks! How about you?", sent: true, time: "10:31 AM" },
  { id: 3, text: "Great! Are we still on for tomorrow?", sent: false, time: "10:32 AM" },
];

export function ChatWindow({ chatId }: { chatId: number | null }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: newMessage,
        sent: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setNewMessage('');
  };

  if (!chatId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 bg-white border-b flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="Contact"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-4">
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Video className="w-6 h-6 text-gray-600 cursor-pointer" />
          <Phone className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sent
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${message.sent ? 'text-green-100' : 'text-gray-500'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message"
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}