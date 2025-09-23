import React from "react";
import styles from './styles.module.css'

const ChatItem = ({item}) => {
    return (
        <div className={`${styles.chatItem} ${item.fromMe=true ? styles.right : null}`}>
            {item.message}
        </div>
    );
}

export default ChatItem;
