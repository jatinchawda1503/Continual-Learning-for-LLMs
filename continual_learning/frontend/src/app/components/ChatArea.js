"use client"
import React from "react";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from "uuid";
import Header from './Header';
import ConversationArea from './ConversationArea';
import ChatInput from './ChatInput';
import IntroMessage from './IntroMessage';
import ChatAPI from '../api/ChatAPI';
import { useChat } from '@/app/ChatContext';

export default function ChatArea() {
  const pathname = usePathname();
  const router = useRouter();
  const regex = /\/chat\/(.+)/;
  let uid = "";

  // Destructure conversation along with addMessage
  const { conversation, addMessage, clearConversation } = useChat();
  
  const handleNewMessage = async (newUserMessage) => {
    if (pathname == "/") {
      uid = uuidv4();
      clearConversation();
      router.push(`/chat/${uid}`);
    } else {
      uid = pathname.match(regex)[1];
    }
  
    // Construct the new user message object
    const newUserMsg = { author: "User", message: newUserMessage };
    

    // Add the new user message to the conversation
    addMessage(newUserMsg);

    try {
      // Make an API call to get the AI response
      const response = await ChatAPI({ message_dict: { 'input': newUserMessage, 'chat_id': uid } });
      // Construct the AI message object
      const aiMsg = { author: "AI", message: response };
      console.log(aiMsg);
      // Add the AI message to the conversation
      addMessage(aiMsg);
      console.log("router.query");
      console.log(router);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chat-area container h-full mx-auto px-2 bg-contentmain">
      {/* Pass the conversation prop to ConversationArea */}
      {pathname === '/' ? <IntroMessage /> : <><Header /> <ConversationArea conversation={conversation} /> </>}
      <div className="chat-input">
        <ChatInput onNewMessage={handleNewMessage} />
      </div>
    </div>
  );
}