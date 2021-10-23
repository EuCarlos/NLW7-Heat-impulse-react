import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.MessageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
        </div>
    )
}