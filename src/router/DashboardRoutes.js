import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Dasboard } from '../pages/Dasboard'
import { Navbar } from '../ui/Navbar'
import { Sidebar } from '../ui/Sidebar'

export const DashboardRoutes = () => {
  const { isCollapsible } = useSelector(state => state.ui)
  return (
    <>
      <Navbar />
      <div className='dasboardRoutes'>
        <Sidebar isActive={isCollapsible} />
        <Switch>
          <Route exact path='/home' component={Dasboard} />

        </Switch>
      </div>

    </>
  )
}
