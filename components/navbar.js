import styles from './navbar.module.scss'

export default function Header() {
    return (
        <div className={`bg-info ${styles.Header}`}>
            <div className={styles.begin}>
                <button className='bg-dark'><a href='/'>Inicio</a></button>
            </div>
            <div className={styles.end}>
                <button className='bg-dark'><a href="/login">Login</a></button>
                <button className='bg-dark'><a href="/register">Registrar</a></button>
            </div>
        </div>
    )
}