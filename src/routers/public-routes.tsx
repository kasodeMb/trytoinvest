import React, { lazy, ComponentType } from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from 'app-constants'

const NotFound = lazy(
  (): Promise<{ default: ComponentType }> => import('screens/not-found'),
)

const Dashboard = lazy(
  (): Promise<{ default: ComponentType }> => import('screens/dashboard'),
)

const PublicRoutes = (): JSX.Element => {
  const {
    public: { DASHBOARD },
  } = routes

  return (
    <Switch>
      <Route exact path={DASHBOARD} component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default PublicRoutes
