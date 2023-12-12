'use client';
// components/Chat/ChatInput.js

import { useState } from "react";
import { useChat } from "@/app/ChatContext";

const ChatInput = ({ onNewMessage }) => {
  const [message, setMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      return; 
    }
    try {
        onNewMessage(message);
    } catch (error) {
      console.error("Error sending message:", error);
      
    }

    setMessage(""); 
  };


  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
      <div className="overflow-hidden rounded-lg w-full flex justify-center align-middle relative">
        <textarea
          id="prompt-textarea"
          tabIndex="0"
          rows="1"
          placeholder="Message …"
          className="m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 pl-3 focus:ring-0 focus-visible:ring-0  md:py-3.5 md:pr-12 placeholder-black/50 text-sidebar"
          spellCheck="false"
          style={{ maxHeight: "200px", height: "52px", overflowY: "hidden" }}
          value={message}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit(e);
            }
          }}
        />
        <button
          type="submit"
          disabled={!message}
          className="absolute cursor-pointer md:bottom-3 md:right-3 hover:bg-blend-lighten right-2  disabled:text-gray-400 text-white p-0.5 border border-black rounded-lg  bottom-1.5 transition-colors"
        >
          <span className="" data-state="closed">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-sidebar"
            >
              <path
                d="M7 11L12 6L17 11M12 18V7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
