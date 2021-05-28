import { types } from '../types/types'
const initialState = {
  isCollapsible: false
}

function toggleMenu (state) {
  const newState = Object.assign({}, state)
  return (newState.isCollapsible = !newState.isCollapsible)
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.isCollapsible:
      return {
        isCollapsible: toggleMenu(state)
      }

    default:
      return state
  }
}
