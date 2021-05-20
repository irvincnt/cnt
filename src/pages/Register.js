import React from 'react'
import { Link } from 'react-router-dom'

export default function Register () {
  return (
    <div className='register'>
      <div className='wrapper'>
        <div className='register-head'>
          <p>Registro</p>
          <span>
            ¿Tener una cuenta?
            <Link to='/login'>Login</Link>
          </span>
        </div>
        <div className='register-form'>
          <form>
            <div className='form-group'>
              <input className='form-control' type='text' placeholder='Nombre' />
            </div>
            <div className='form-group'>
              <input className='form-control' type='email' placeholder='Correo' />
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <input className='form-control' type='password' placeholder='contraseña' />
              </div>
              <div className='form-group'>
                <input className='form-control' type='password' placeholder='Conformar contraseña' />
              </div>
            </div>
            <div className='form-group'>
              <button className='btn'>Registrar</button>
            </div>
          </form>
        </div>
        <p className='divider line one-line'>o registrar con</p>
        <div className='register-social'>
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
