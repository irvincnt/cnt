import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import validator from 'validator'

export default function Register () {
  const [errors, setErrors] = useState({})
  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const handlerRegister = (e) => {
    e.preventDefault()
    console.log(values)

    const errorsForm = validate()
    if (Object.keys(errorsForm).length > 0) {
      setErrors(errorsForm)
    } else {
      setErrors({})
    }
  }

  const validate = () => {
    const errors = {}
    if (values.name.trim().length === 0) {
      errors.name = 'Error en name'
    }

    if (!validator.isEmail(values.email)) {
      errors.email = 'Error en email'
    }

    if (values.password1.length < 8) {
      errors.password1 = 'Password must be 8 or more characters'
    } else if (values.password1 !== values.password2) {
      errors.password1 = 'Password not match'
      errors.password2 = 'Password not match'
    }

    return errors
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
              <input
                className={`${
                  errors.name ? 'form-control is-invalid' : 'form-control'
                }`}
                type='text'
                placeholder='Nombre'
                name='name'
                value={values.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className='message-invalid'>{errors.name}</p>
              )}
            </div>
            <div className='form-group'>
              <input
                className={`${
                  errors.email ? 'form-control is-invalid' : 'form-control'
                }`}
                type='email'
                placeholder='Correo'
                name='email'
                value={values.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className='message-invalid'>{errors.email}</p>
              )}
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <input
                  className={`${
                    errors.password1
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }`}
                  type='password'
                  placeholder='contraseña'
                  name='password1'
                  value={values.password1}
                  onChange={handleInputChange}
                />
                {errors.password1 && (
                  <p className='message-invalid'>{errors.password1}</p>
                )}
              </div>
              <div className='form-group'>
                <input
                  className={`${
                    errors.password2
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }`}
                  type='password'
                  placeholder='Conformar contraseña'
                  name='password2'
                  value={values.password2}
                  onChange={handleInputChange}
                />
                {errors.password2 && (
                  <p className='message-invalid'>{errors.password2}</p>
                )}
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
