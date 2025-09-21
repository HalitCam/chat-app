import React, { useState } from 'react';
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext';


const ChatForm = () => {
    const [inputData, setInputData] = useState("")
    // const {messages , setmessages} =useChat();
    const inputHandler = (e) => {
        e.preventDefault();
        console.log(inputData)
        setInputData("");
    }

    return (
        <div>
            <form onSubmit={inputHandler}>
                <input placeholder='ENTER MESSAGE...' value={inputData} type="text" className={styles.textInput} onChange={(e)=>setInputData(e.target.value)}/>
               
            </form>
            
        </div>
    )
}

export default ChatForm;

