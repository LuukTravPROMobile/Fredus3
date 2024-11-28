import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import InputBox from "./components/InputBox/InputBox";
import { fetchAIResponse } from "./api";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (userInput) => {
    const userMessage = { role: "user", content: userInput };
    setMessages((prev) => [...prev, userMessage]);

    const aiResponse = await fetchAIResponse(userInput);
    const aiMessage = { role: "assistant", content: aiResponse };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>AI Assistant</h1>
      <ChatWindow messages={messages} />
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default App;
