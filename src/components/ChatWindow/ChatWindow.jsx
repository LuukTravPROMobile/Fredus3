import React from "react";

const ChatWindow = ({ messages }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", height: "400px", overflowY: "scroll" }}>
      {messages.map((msg, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong>
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
