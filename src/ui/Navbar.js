import React from 'react'
import '../styles/navbar.scss'
import menu from '../assets/icons/menu.svg'
import perfil from '../assets/images/perfil.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenSidebar } from '../actions/ui'
import { startLogout } from '../actions/auth'

export const Navbar = () => {
  const dispatch = useDispatch()
  const { isCollapsible } = useSelector(state => state.ui)

  const handlerSidebar = () => {
    dispatch(isOpenSidebar(isCollapsible))
  }

  const handlerLogaout = () => {
    dispatch(startLogout())
  }

  return (
    <div className='navbar'>
      <img src={menu} onClick={handlerSidebar} />
      <div>
        <button onClick={handlerLogaout}>Salir</button>
        <img className='perfil' src={perfil} />
      </div>
    </div>
  )
}
