import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types'

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchWithoutToken('auth', { email, password }, 'POST')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login({ uid: body.uid, name: body.name }))
    } else {
      console.log('%c%s', 'color: #f04806', 'Errror')
    }
  }
}

export const startChecking = () => {
  return async (dispatch) => {
    const res = await fetchWithToken('auth/renew')
    const body = await res.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(login({
        uid: body.uid,
        name: body.name
      }))
    } else {
      console.log('%c%s', 'color: #f04806', body.msg)
      dispatch(checkingFinish())
    }
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user
})

const checkingFinish = () => ({ type: types.authCheckingFinish })
