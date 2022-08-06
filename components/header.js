import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.begin}>
                <button><a href='/'>Inicio</a></button>
            </div>
            <div className={styles.end}>
                <button><a href="/login">Login</a></button>
                <button><a href="/register">Registrar</a></button>
            </div>
        </div>
    )
}