import React, { useState } from 'react'
import Navbar from '../ui/Navbar'
import { Sidebar } from '../ui/Sidebar'

export const Dasboard = () => {
  const [state, setstate] = useState(false)

  const toggle = () => {
    setstate(!state)
  }
  return (
    <div>
      <Navbar />
      <button onClick={toggle}>Toggle sidebar</button>
      <Sidebar isActive={state} />
    </div>
  )
}
