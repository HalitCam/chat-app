import {useState, useEffect} from "react";
import ChatList from "./ChatList";
import ChatForm from './ChatForm';
import "../App.js"
import {init} from "../socketApi"

const Container = () => {

    useEffect(()=>{
        init();
    }, [])

    return (
        <div className="App">
            <ChatList/>
            <ChatForm/>
        </div>
    )
}

export default Container;