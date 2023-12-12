// ConversationArea.js
import React, { useEffect } from 'react';
import Avatar from "./Avatar";
import clsx from "clsx";


const ConversationArea = ({ conversation }) => {

  return (
    <div className="conversation-area h-4/6 overflow-y-scroll overflow-x-hidden">
      <div className="conversation-area container mx-auto px-5">
        {conversation.map((message, index) => (
          <div
            className={clsx(
              "conversation-item flex flex-col",
              {
                "pb-16": index === conversation.length - 1,
              },
              "p-2 bottom-1"
            )}
            key={index}
          >
            <div className="intro-area flex justify-items-start align-middle text-base">
              <Avatar author={message.author} />
              <div className="w-full chat-conversation">
                <div className="author-name">{message.author}</div>
                <div className="message-area">{message.message}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationArea;
