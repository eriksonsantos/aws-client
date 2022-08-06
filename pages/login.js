import { useState, useEffect } from 'react'
import styles from '../styles/Login.module.css'
import {Header} from '../components'

export default function Login() {
    const [state, setState] = useState(0)

    return (
        <>
            <Header />
            <div className={styles.register}>
                <form className={styles.form}>
                    <label>Digite seu email</label>
                    <input type={'email'} className={styles.items} />
                    <label className={styles.items}>Digite sua senha</label>
                    <input type={'password'} className={styles.items} />
                    <input type={'button'} value={'Entrar'} className={styles.items} />
                </form>
            </div>
        </>
    )
}