import React from "react";
<TravelChat openAiApiKey={import.meta.env} />
const AppChat = () => {
    return (
      <>
        <BasicChat
          openAiApiKey={import.meta.env.VITE_OPENAI_API_KEY}
          chatTitle="TravelChat"
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
  