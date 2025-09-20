import React, { useState } from 'react';
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext';


const ChatForm = () => {
    
    const {messages,setMessages} =useChat()
    let prev = {...messages}
    console.log(prev)
    console.log(messages)
    // const [state, setstate] = useState("");
        const inputHandler = (e) => {
            // e.preventDefault();
            // console.log(messages)
            
           
        }

    return (
    

        <div>
            <form onSubmit={inputHandler}>
                <input placeholder='ENTER MESSAGE...' type="text" className={styles.textInput} onChange={(e) => {setMessages(prev,{ message:  e.target.value}) }}/>
               
            </form>
            
        </div>
    )
}

export default ChatForm;

// onKeyDown={(e) => {if(e.key === "ENTER") console.log("e.target.value")