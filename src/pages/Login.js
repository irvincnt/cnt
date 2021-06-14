import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogin, removeError } from '../actions/auth'
import { Alert } from '../components/helpers/alert'
import { useForm } from '../hooks/useForm'
import '../styles/login.scss'

export default function Login () {
  const dispatch = useDispatch()
  const msg = useSelector(state => state.msg)

  const [values, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const handlerRegister = (e) => {
    e.preventDefault()
    dispatch(startLogin(values.email, values.password))
  }

  const onChangeRegister = ({ target }) => {
    handleInputChange({ target })

    if ((values.email.length > 0 || values.password.length > 0) && msg.ok) {
      dispatch(removeError())
    }
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
                onChange={onChangeRegister}
              />
            </div>
            <div className='form-group'>
              <input
                className='form-control'
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={onChangeRegister}
              />
            </div>
            <div className='form-group'>
              <button className='btn'>log in</button>
            </div>
          </form>
        </div>
        {msg.ok && <Alert type='danger' label={msg.error} />}

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
