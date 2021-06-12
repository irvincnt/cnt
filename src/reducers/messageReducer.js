import { types } from '../types/types'

const initialState = {
  error: '',
  ok: false
}

export const messageReducer = (store = initialState, action) => {
  switch (action.type) {
    case types.errorLogin:
      return {
        error: action.payload.msg,
        ok: !action.payload.ok
      }

    case types.errorRemove:
      return initialState

    default:
      return store
  }
}
