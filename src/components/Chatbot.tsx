import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-electric-blue hover:bg-bright-cyan text-white rounded-full p-4 shadow-lg transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-navy rounded-lg shadow-xl border border-bright-cyan/15">
          <div className="bg-electric-blue text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">CoreWerx Assistant</h3>
            <p className="text-sm opacity-90">How can I help you today?</p>
          </div>
          <div className="h-96 p-4 overflow-y-auto bg-dark-navy">
            {/* Placeholder for chat messages */}
            <div className="bg-navy rounded-lg p-3 mb-3 max-w-[80%]">
              <p className="text-gray-200">
                Hello! I'm your IT solutions assistant. How can I help you today?
              </p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-600 bg-navy rounded-lg px-3 py-2 focus:outline-none focus:border-electric-blue text-gray-200"
              />
              <button className="bg-electric-blue hover:bg-bright-cyan text-white px-4 py-2 rounded-lg transition-colors duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;