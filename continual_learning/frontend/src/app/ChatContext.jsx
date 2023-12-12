'use client';

import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [conversation, setConversation] = useState([]);

  const addMessage = (message) => {
    setConversation((prevConversation) => [...prevConversation, message]);
  };

  const clearConversation = () => {
    setConversation([]);
  };

  return (
    <ChatContext.Provider value={{ conversation, addMessage, clearConversation }}>
      {children}
    </ChatContext.Provider>
  );
};
