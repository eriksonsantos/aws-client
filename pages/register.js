import { useState, useEffect } from 'react'
import styles from '../styles/Register.module.css'
import axios from 'axios';
import { Header } from '../components'
// import {API} from '../config'

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
        axios.post(`http://localhost:5000/api/register`, {
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
                    <input value={name} onChange={changeValue('name')} type={'text'} />
                    <label>Digite seu email</label>
                    <input value={email} className='nav-email' onChange={changeValue('email')} type={'email'} />
                    <label>Digite sua senha</label>
                    <input value={password} onChange={changeValue('password')} type={'password'} />
                    <label>Salve suas credenciais</label>
                    <button onClick={registerUser} > Salvar </button>
                    {error && <h3 style={{ backgroundColor: 'red', marginTop: '3px', fontSize: '90%' }}>
                        {error}
                    </h3>}
                    {success && <h3 style={{ backgroundColor: 'green', marginTop: '3px', fontSize: '90%' }}>
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

        </>
    )
}