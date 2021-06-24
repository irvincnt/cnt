import React from 'react'
import '../styles/sidebar.scss'

import home from '../assets/icons/home.svg'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenSidebar } from '../actions/ui'

export const Sidebar = () => {
  const dispatch = useDispatch()
  const { isCollapsible } = useSelector(state => state.ui)

  const handlerSidebar = () => {
    dispatch(isOpenSidebar(isCollapsible))
  }

  return (
    <>
      <nav className={`${isCollapsible ? 'menu' : 'menu menu_active'}`}>
        <ul>
          <li>
            <div className='group-item'>
              <div className='item'>
                <img src={home} />
              </div>
            </div>
          </li>
          <li>
            <div className='group-item'>
              <div className='item'>
                <img src={home} />
              </div>
            </div>
          </li>
          <li>
            <div className='group-item'>
              <div className='item'>
                <img src={home} />
              </div>
            </div>
          </li>
          <li>
            <div className='group-item'>
              <div className='item'>
                <img src={home} />
              </div>
            </div>
          </li>
          <li>
            <div className='group-item'>
              <div className='item'>
                <img src={home} />
              </div>
            </div>
          </li>
          <li>
            <div className='group-item'>
              <div className='item'>
                <img src={home} />
              </div>
            </div>
          </li>
        </ul>
      </nav>
      {isCollapsible && <div className='overlay' onClick={handlerSidebar} />}
    </>

  )
}
