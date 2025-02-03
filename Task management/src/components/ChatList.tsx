import React from 'react';
import { MessageSquare, MoreVertical, Phone, Search, Video } from 'lucide-react';

const chats = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    time: '10:30 AM',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    unread: 2,
  },
  {
    id: 2,
    name: 'Alice Smith',
    lastMessage: 'Meeting at 3 PM',
    time: '9:45 AM',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    unread: 0,
  },
  {
    id: 3,
    name: 'Team Project',
    lastMessage: 'Bob: Updated the docs',
    time: 'Yesterday',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop',
    unread: 5,
  },
];

export function ChatList({ onSelectChat }: { onSelectChat: (id: number) => void }) {
  return (
    <div className="w-full md:w-96 h-full border-r border-gray-200">
      <div className="p-4 bg-white border-b">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">WhatsApp</h1>
          <MoreVertical className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search chats"
            className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-140px)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{chat.name}</h3>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="bg-green-500 text-white rounded-full px-2 py-0.5 text-xs">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}