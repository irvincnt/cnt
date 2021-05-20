import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/login.scss'

export default function Login () {
  return (
    <div className='login'>
      <div className='wrapper'>
        <div className='login-head'>
          <p>Login</p>
          <span>
            o
            <Link to='/register'>Crear una cuenta</Link>
          </span>
        </div>
        <div className='login-form'>
          <form>
            <div className='form-group'>
              <input className='form-control' type='email' placeholder='Email address' />
            </div>
            <div className='form-group'>
              <input className='form-control' type='password' placeholder='Password' />
            </div>
            <div className='form-group'>
              <button className='btn'>Log in</button>
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
