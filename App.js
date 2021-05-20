import React from 'react'
import { AppRouter } from './src/router/AppRouter'
import './src/styles/base.scss'

export default function App () {
  console.log('ENV =>>' + process.env.API)
  return (
    <div className='app'>
      <h1>Hola mundo</h1>
      <AppRouter />
    </div>
  )
}
