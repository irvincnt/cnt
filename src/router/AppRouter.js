import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Dasboard } from '../pages/Dasboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dasboard' component={Dasboard} />
      </Switch>
    </Router>
  )
}
