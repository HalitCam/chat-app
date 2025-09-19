import React, { useState } from 'react';
import styles from './styles.module.css'

const ChatForm = () => {

    return (

        <div>
            <form>
                <input type="text" className={styles.textInput} onChange={(e) => (e.target.value)} />
               
            </form>
            
        </div>
    )
}

export default ChatForm;