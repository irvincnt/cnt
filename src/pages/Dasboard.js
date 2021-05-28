import React from 'react'
import { Sidebar } from '../ui/Sidebar'
import { Navbar } from '../ui/Navbar'
import { useSelector } from 'react-redux'

export const Dasboard = () => {
  const { isCollapsible } = useSelector(state => state.ui)

  return (
    <div>
      <Navbar />
      <Sidebar isActive={isCollapsible} />
    </div>
  )
}
