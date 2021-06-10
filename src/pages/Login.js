import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin } from '../actions/auth'
import { Spinner } from '../components/helpers/spinner'
import { useForm } from '../hooks/useForm'
import '../styles/login.scss'

export default function Login () {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const [values, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const handlerRegister = (e) => {
    e.preventDefault()
    setLoading(!loading)
    dispatch(startLogin(values.email, values.password))
  }

  return (
    <div className='login'>
      <div className='wrapper'>
        <div className='login-head'>
          <p>Login</p>
          <span>
            o<Link to='/register'>Crear una cuenta</Link>
          </span>
        </div>
        <div className='login-form'>
          <form onSubmit={handlerRegister}>
            <div className='form-group'>
              <input
                className='form-control'
                type='email'
                placeholder='Email address'
                name='email'
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <button
                className={`${loading ? 'disabled-btn btn' : 'btn'}`}
                disabled={loading}
              >
                {loading ? <Spinner /> : 'log in'}
              </button>
            </div>
          </form>
        </div>
        <p className='divider line one-line'>o inicia sesión con</p>
        <div className='login-social'>
          <div className='gg'>
            <a>Google</a>
          </div>
          <div className='fb'>
            <a>Facebook</a>
          </div>
        </div>
      </div>
    </div>
  )
}
