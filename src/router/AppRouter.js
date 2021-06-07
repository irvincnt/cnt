import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const isA = true

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path='/login' component={Login} isAuthenticated={isA} />
        <PublicRoute exact path='/register' component={Register} isAuthenticated={isA} />

        <PrivateRoute exact path='/home' component={DashboardRoutes} isAuthenticated={isA} />
        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}
