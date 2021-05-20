import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  )
}
