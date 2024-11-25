import React from "react";
<BasicChat openAiApiKey={import.meta.env} />
const AppChat = () => {
    return (
      <>
        <BasicChat
          openAiApiKey={import.meta.env.VITE_OPENAI_API_KEY}
          chatTitle="Travel Chat"
          systemPrompt={`
            Your name is Sir. You are a Travel expert.
            The only thing you talk about is travel-related topics about Las Vegas.
            Always begin a discussion by introducing yourself.
          `}
        />
      </>
    );
  };
  
  export default AppChat;
  