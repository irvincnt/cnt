import React from 'react'
import '../styles/navbar.scss'
import menu from '../assets/icons/menu.svg'
import perfil from '../assets/images/perfil.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenSidebar } from '../actions/ui'

export const Navbar = () => {
  const dispatch = useDispatch()
  const { isCollapsible } = useSelector(state => state.ui)

  const handlerSidebar = () => {
    dispatch(isOpenSidebar(isCollapsible))
  }

  return (
    <div className='navbar'>
      <img src={menu} onClick={handlerSidebar} />
      <img className='perfil' src={perfil} />
    </div>
  )
}
