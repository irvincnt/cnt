import React from 'react'
import '../styles/navbar.scss'
import menu from '../assets/icons/menu.svg'
import perfil from '../assets/images/perfil.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenSidebar } from '../actions/ui'
import { startLogout } from '../actions/auth'

export const Navbar = () => {
  const dispatch = useDispatch()
  const { ui, auth } = useSelector(state => state)

  const handlerSidebar = () => {
    dispatch(isOpenSidebar(ui?.isCollapsible))
  }

  const handlerLogaout = () => {
    dispatch(startLogout())
  }

  return (
    <div className='navbar'>
      <img src={menu} onClick={handlerSidebar} className='icon' />
      <div className='info-left'>
        <h3>Bienvenido {auth?.name} </h3>

      </div>
      <div>
        <button onClick={handlerLogaout}>Salir</button>
        <img className='perfil' src={perfil} />
      </div>
    </div>
  )
}
