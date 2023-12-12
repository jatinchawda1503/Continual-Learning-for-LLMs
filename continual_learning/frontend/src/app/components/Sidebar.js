'use client';
import { useState, useEffect } from 'react';
import react from 'react';
import Link from 'next/link';
import UpdateChatHistory from '../api/UpdateHistory';
import Loader from './Loader';
import GetChatConversation from '../api/GetChatConversations';
import { useChat } from '@/app/ChatContext'; 
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [isLoading, setIsLoading] = useState(false); 
    const { conversation, addMessage, clearConversation } = useChat();
    const regex = /\/chat\/(.+)/;
    const pathname = usePathname();

    const getChatHistory = async () => {
        setIsLoading(true);
        const response = await UpdateChatHistory();
        setIsLoading(false);
        setChatHistory(response);
    };
    
    const getChatConversation = async (chatId) => {
        console.log(chatId);
        const response = await GetChatConversation({chat_id: chatId});
        console.log(response);
        clearConversation();
        response.map((message) => {
            if (message[0].type == "ai") {
                const aimsg = { author: "AI", message: message[0].data.content};
                addMessage(aimsg);
            }
            else {
                const usermsg = { author: "User", message: message[0].data.content};
                addMessage(usermsg);
            }
            
        });
    }        
    
    useEffect(() => {
        getChatHistory();
    }, []);

    useEffect(() => {
        if (pathname == "/") {
            setActiveChatId(null);
        }
        else {
            
            const chatIdFromPathname  = pathname.match(regex)[1];
            console.log("chatIdFromPathname");
            console.log(chatIdFromPathname);
            setActiveChatId(chatIdFromPathname );
            getChatConversation(chatIdFromPathname );
        }
    }, []);

    return(
        <div className='sidebar-main h-full bg-sidebar p-3 w-[230px]'>
            <div className="sidebar-inner h-full sticky overflow-y-scroll ">
                <Link href="/">                
                <div className="btn flex justify-between cursor-pointer rounded-lg border border-borderlight mb-2 hover:bg-slate-600 p-2">
                    <button className="new-chat-btn text-sm w-full text-start" onClick={() => setActiveChatId(null)}>New chat</button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5-2v16" />
                    </svg>
                </div>
                </Link>

                <hr className='py-1 pb-1'/>

                <section>
                <h5 className='text-sm'>Chat History</h5>
                <div className="chat-group mt-2" id="ChatGroup">
                    { isLoading ? (
                        <Loader />
                    ) : (
                        <ul className='text-sm'>
                        {(chatHistory.length == 0) ? <></> : (
                        
                        chatHistory.map((chatId) => (
                            <li 
                            key={chatId} 
                            className={`cursor-pointer p-2 rounded-sm mb-1 ${activeChatId == chatId ? 'bg-black' : 'bg-sidebar'}`}
                            onClick={() => setActiveChatId(chatId) & getChatConversation(chatId)}
                            >
                            <Link href={`/chat/${chatId}`} key={chatId} id={chatId}>
                                <div className="relative grow-0 truncate overflow-hidden">
                                {chatId}
                                </div>
                            </Link>
                            </li>
                        ))
                        )}
                        </ul>
                    )}
                </div>
                </section>
            </div>
        </div>
    )
}

export default Sidebar;
