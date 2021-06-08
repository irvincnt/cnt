import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

export default function Register () {
  const [values, handleInputChange] = useForm({ name: '', email: '', password1: '', password2: '' })

  const handlerRegister = (e) => {
    e.preventDefault()
    console.log(values)
  }
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
          <form onSubmit={handlerRegister}>
            <div className='form-group'>
              <input className='form-control is-invalid' type='text' placeholder='Nombre' name='name' value={values.name} onChange={handleInputChange} />
              <p className='message-invalid'>Error en nombre</p>
            </div>
            <div className='form-group'>
              <input className='form-control' type='email' placeholder='Correo' name='email' value={values.email} onChange={handleInputChange} />
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <input className='form-control' type='password' placeholder='contraseña' name='password1' value={values.password1} onChange={handleInputChange} />
              </div>
              <div className='form-group'>
                <input className='form-control' type='password' placeholder='Conformar contraseña' name='password2' value={values.password2} onChange={handleInputChange} />
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
