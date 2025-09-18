import React, { useState } from 'react';
import { useChat } from '../context/ChatContext'
import styles from './styles.module.css'

const ChatForm = () => {
    const data = useChat();
    console.log(data)
    return (



        <div>
            <form>
                <input type="submit" onChange={(e) => (e.target.value)} />
               
            </form>
            
        </div>
    )
}

export default ChatForm;