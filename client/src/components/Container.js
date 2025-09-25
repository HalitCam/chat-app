import {useState, useEffect} from "react";
import ChatList from "./ChatList";
import ChatForm from './ChatForm';
import "../App.js"
import {init, subscribeChat, subscribeInitialMessages } from "../socketApi"
import {useChat} from "../context/ChatContext.js"

const Container = () => {
    const {messages,setMessages} = useChat() ;
    useEffect(()=>{
        init();

        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, {message, fromMe:false}])
        });
        subscribeInitialMessages((messages) =>{
            setMessages(messages)
        }
            
        )

    }, [])

    return (
        <div className="App">
            <ChatList/>
            <ChatForm/>
        </div>
    )
}

export default Container;