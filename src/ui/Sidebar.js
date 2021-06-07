import React from 'react'
import '../styles/sidebar.scss'

import home from '../assets/icons/home.svg'
import up from '../assets/icons/arrow-up.svg'

export const Sidebar = ({ isActive }) => {
  console.log('isActive', isActive)
  return (
    <nav className={`${isActive ? 'menu menu_active' : 'menu'}`}>
      <ul>
        <li>
          <div className='group-item'>
            <div className='item'>
              <img src={home} />
              <span>Home</span>
            </div>
            <img src={up} />
          </div>
        </li>
        <li>
          <div className='group-item'>
            <div className='item'>
              <img src={home} />
              <span>Pages</span>
            </div>
            <img src={up} />
          </div>
        </li>
        <li>
          <div className='group-item'>
            <div className='item'>
              <img src={home} />
              <span>To</span>
            </div>
            <img src={up} />
          </div>
        </li>
        <li>
          <div className='group-item'>
            <div className='item'>
              <img src={home} />
              <span>Chat</span>
            </div>
            <img src={up} />
          </div>
        </li>
        <li>
          <div className='group-item'>
            <div className='item'>
              <img src={home} />
              <span>Email</span>
            </div>
            <img src={up} />
          </div>
        </li>
        <li>
          <div className='group-item'>
            <div className='item'>
              <img src={home} />
              <span>Autentication</span>
            </div>
            <img src={up} />
          </div>
        </li>
      </ul>
    </nav>
  )
}
