import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/dasboard.scss'

export const Dasboard = () => {
  const { isCollapsible } = useSelector(state => state.ui)
  return (
    <div className={`${isCollapsible ? 'full-size dasboard_active' : 'full-size'}`}>
      hola Dasboard
    </div>
  )
}
