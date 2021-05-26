import React, { Component } from 'react'
import '../styles/navbar.scss'
import menu from '../assets/icons/menu.svg'
import perfil from '../assets/images/perfil.jpg'
export class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <img src={menu} />
        <img className='perfil' src={perfil} />
      </div>
    )
  }
}

export default Navbar
