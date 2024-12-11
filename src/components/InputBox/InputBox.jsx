import React, { useState } from "react";

const ChatbotFredus = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        `You: ${input}`,
        `FredusBot: You said "${input}"`,
      ]);
      <Click>("")</Click>
    }
  };

  return (
    <div>
      <h2>ChatbotFredus</h2>
      <div
        style={{
          height: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatbotFredus;
