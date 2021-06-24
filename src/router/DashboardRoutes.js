import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dasboard } from '../pages/Dasboard'
import { Navbar } from '../ui/Navbar'
import { Sidebar } from '../ui/Sidebar'

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='dasboardRoutes'>
        <Sidebar />
        <Switch>
          <Route exact path='/home' component={Dasboard} />

        </Switch>
      </div>

    </>
  )
}
