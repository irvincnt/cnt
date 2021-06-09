import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  const dispatch = useDispatch()

  const { checking, uid } = useSelector(state => state.auth)
  console.log('%c%s %s', 'color: #54f509', checking, uid)

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  if (checking) {
    return <h5>Espere...</h5>
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path='/login'
          component={Login}
          isAuthenticated={!!uid}
        />
        <PublicRoute
          exact
          path='/register'
          component={Register}
          isAuthenticated={!!uid}
        />

        <PrivateRoute
          exact
          path='/home'
          component={DashboardRoutes}
          isAuthenticated={!!uid}
        />
        <Redirect to='/home' />
      </Switch>
    </Router>
  )
}
