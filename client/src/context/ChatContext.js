import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [messages, setMessages] = useState([
        { message: 'Selam' },
        { message: 'Naber ?' }
    ]); // This includes messages

    const values = {
        messages,
        setMessages
    }

    return (
        <ChatContext.Provider value={values}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () => useContext(ChatContext);


// export default ChatContext; instead of that will I use useContext() above:


