import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './src/router/AppRouter'
import { store } from './src/store/store'
import './src/styles/base.scss'

export default function App () {
  console.log('ENV =>>' + process.env.API)
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}
