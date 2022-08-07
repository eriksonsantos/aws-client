import { useState, useEffect } from 'react'
import styles from '../styles/Register.module.scss'
import axios from 'axios';
import { Header,Footer } from '../components'

export default function Register() {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: ''
    })

    const { name, email, password, error, success } = state

    function registerUser(event) {
        event.preventDefault();
        console.table({ name, email, password })
        axios.post(`${process.env.API}/register`, {
            name,
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

    function registerForm() {
        return (
            <div className={styles.register}>
                <form className={styles.form}>
                    <label>Digite seu nome</label>
                    <input value={name}  placeholder="Type your name..." className={`form-control ${styles.items}`} onChange={changeValue('name')} type={'text'} />
                    <label>Digite seu email</label>
                    <input value={email}  placeholder="Type your email..." className={`form-control ${styles.items}`} onChange={changeValue('email')} type={'email'} />
                    <label>Digite sua senha</label>
                    <input value={password}  placeholder="Type your password..." className={`form-control ${styles.items}`} onChange={changeValue('password')} type={'password'} />
                    
                    <button className='btn btn-dark mt-2' onClick={registerUser} > Salvar </button>
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
            {registerForm()}
            <Footer/>
        </>
    )
}