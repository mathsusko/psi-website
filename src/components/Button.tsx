import styles from './Button.module.css'

export function Button() {
    return (
        <button className={styles.button}>
            <a href="#">Entre em contato</a>
        </button>
    )
}