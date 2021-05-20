import React from 'react'
import '../styles/login.scss'

export default function Login () {
  return (
    <div className='login'>
      <div className='wrapper'>
        <div className='login-head'>
          <p>Login</p>
          <span>
            o
            <a>Crear una cuenta</a>
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
