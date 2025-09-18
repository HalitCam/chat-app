import React from 'react';
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext';   
import ChatItem from './ChatItem'

function ChatList(){
    const {messages, setMessages} = useChat();

    return(
        <div className={styles.chatlist}>
            <div>
                {messages.map((item,key)=> (<ChatItem item={item}/>))}
            </div>
        </div>
    )
}

export default ChatList;