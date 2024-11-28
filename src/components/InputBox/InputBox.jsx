import React, { useState } from "react";

const InputBox = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "80%", padding: "10px" }}
      />
      <button onClick={handleSend} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
