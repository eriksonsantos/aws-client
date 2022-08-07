import { useState, useEffect } from 'react'
import styles from '../styles/Login.module.scss'
import axios from 'axios';
import { Footer, Header } from '../components'
// import {API} from '../config'

export default function Login() {
    const [state, setState] = useState({
        email: '',
        password: '',
        error: '',
        success: ''
    })

    const { name, email, password, error, success } = state

    function loginUser(event) {
        event.preventDefault();
    
        axios.post(`${process.env.API}/login`, {
            email,
            password
        })
            .then(response => {
                setState({ ...state, ['success']: response.data.data, ['error']: '' })
          
                
            })
            .catch(perror => setState({ ...state, ['error']: perror.response.data.error, ['success']: '' }))
    }

    function changeValue(fname) {

        return function updateState(e) {
            setState({ ...state, [fname]: e.target.value })
        }
    }

    function loginForm() {
        return (
            <div className={styles.register}>
                <form className={styles.form}>
                    <label>Digite seu email</label>
                    <input value={email}  placeholder="Type your email..." className={`form-control ${styles.items}`} onChange={changeValue('email')} type={'email'} />
                    <label>Digite sua senha</label>
                    <input value={password}  placeholder="Type your password..." className={`form-control ${styles.items}`} onChange={changeValue('password')} type={'password'} />
                    
                    <button className='btn btn-dark' onClick={loginUser} > Login </button>
                    {error && <h3 style={{ backgroundColor: 'red', marginTop: '5px', fontSize: '90%' }}>
                        {error}
                    </h3>}
                    {success && <h3 style={{ backgroundColor: 'green', marginTop: '5px', fontSize: '90%' }}>
                        {success}
                    </h3>}
                </form>

            </div>
        )
    }

    return (
        <>
            <Header />
            {loginForm()}
            <Footer/>

        </>
    )
}