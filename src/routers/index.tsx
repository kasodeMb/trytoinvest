import React, { lazy, ComponentType, ReactElement } from 'react'

const PublicRoutes = lazy(
  (): Promise<{ default: ComponentType }> => import('./public-routes'),
)

const Routers = (): ReactElement => {
  return (
    <React.Fragment>
      <PublicRoutes />
    </React.Fragment>
  )
}

export default React.memo(Routers)
