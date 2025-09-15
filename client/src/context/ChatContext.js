import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({children}) {
    const [messages, setMessages] = useState ([]); // This includes messages

    const values ={
        messages,
        setMessages
    }

    return(
        <ChatContext.Provider value={values}>
            {children}
        </ChatContext.Provider>
    )    
}
// const UseChat = useContext(ChatContext); 

// export default UseChat; //ERROR

export default ChatContext;