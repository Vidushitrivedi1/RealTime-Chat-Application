import React, { useState } from 'react';
import './ChatWindow.css';

function ChatWindow() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('communityMessages');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      const updated = [...messages, input];
      setMessages(updated);
      localStorage.setItem('communityMessages', JSON.stringify(updated));
      setInput('');
    }
  };

  return (
    <div className="chat-window">
      <h1>🌟 Aarambh Niyati 🌟</h1>
      <h2>Community Chat / सामुदायिक बातचीत</h2>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div className="message" key={i}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message / अपना संदेश टाइप करें"
      />
      <button onClick={sendMessage}>Send / भेजें</button>
    </div>
  );
}

export default ChatWindow;
