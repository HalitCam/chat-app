import styles from './styles.module.css'

const ChatItem = ({item}) => {
    return (
        <div className={styles.chatItem}>
            {item.message}
        </div>
    );
}

export default ChatItem;
