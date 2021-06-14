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
      dispatch(showError(body.msg, body.ok))
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
      dispatch(checkingFinish())
    }
  }
}

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      'auth/new',
      { name, email, password },
      'POST'
    )
    const body = await resp.json()

    if (body.ok) {
      localStorage.setItem('token', body.token)
      localStorage.setItem('token-init-date', new Date().getTime())

      dispatch(
        login({
          uid: body.uid,
          name: body.name
        })
      )
    } else {
      dispatch(showError(body.msg, body.ok))
    }
  }
}

const login = (user) => ({
  type: types.authLogin,
  payload: user
})

const checkingFinish = () => ({ type: types.authCheckingFinish })

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
  }
}

const logout = () => ({ type: types.authLogout })

const showError = (msg, ok) => ({
  type: types.errorLogin,
  payload: {
    msg, ok
  }
})

export const removeError = () => ({
  type: types.errorRemove
})
