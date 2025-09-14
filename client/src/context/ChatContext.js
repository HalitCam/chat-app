import { createContext, useState } from "react";

const [message, setMessage] = useState ();

const ChatContext = createContext();

export function ChatProvider(children) {
    return(
        <ChatContext.Provider>
            {children}
        </ChatContext.Provider>
    )    
}