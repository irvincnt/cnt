import { types } from '../types/types'

export const isOpenSidebar = (isCollapsible) => {
  return {
    type: types.isCollapsible,
    payload: {
      isCollapsible
    }
  }
}
