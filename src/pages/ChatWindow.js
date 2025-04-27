srcimport React, { useState, useEffect, useRef } from 'react';

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, input]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ padding: '30px', backgroundColor: '#fff8f0', minHeight: '100vh' }}>
      <h1 style={{
        textAlign: 'center',
        color: '#0d47a1',
        fontFamily: "'Merriweather', serif",
        fontSize: '36px',
        marginBottom: '10px'
      }}>
        🌟 Aarambh Niyati 🌟
      </h1>

      <h2 style={{
        textAlign: 'center',
        color: '#e65100',
        fontFamily: "'Merriweather', serif",
        fontSize: '24px',
        marginBottom: '40px'
      }}>
        Community Chat / सामुदायिक बातचीत
      </h2>

      <div style={{
        border: '1px solid #ccc',
        height: '400px',
        overflowY: 'auto',
        marginBottom: '20px',
        padding: '15px',
        borderRadius: '12px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            backgroundColor: '#e3f2fd',
            padding: '10px 15px',
            margin: '8px 0',
            borderRadius: '20px',
            maxWidth: '70%',
            fontSize: '16px',
            color: '#0d47a1',
            fontFamily: "'Poppins', sans-serif",
          }}>
            {msg}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={{ display: 'flex' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message / अपना संदेश टाइप करें"
          style={{
            flex: 1,
            padding: '12px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginRight: '10px',
            fontFamily: "'Poppins', sans-serif",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            borderRadius: '8px',
            backgroundColor: '#0d47a1',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Merriweather', serif",
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)'
          }}
        >
          Send / भेजें
        </button>
      </div>

    </div>
  );
}

export default ChatWindow;
