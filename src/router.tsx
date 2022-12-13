import { memo } from 'react'

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom'

import { Layout } from 'components'

/* PLOP_INJECT_IMPORT */
import Home from 'views/Home'

import { ROUTES } from 'settings/constants'

export type RouteType = {
  path: ROUTES
  element: () => JSX.Element
}[]

const routes: RouteType = [
  /* PLOP_INJECT_ROUTE */
  { path: ROUTES.Home, element: Home },
]

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          const Component = route.element

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          )
        })}

        <Route path="*" element={<Navigate to={ROUTES.Home} />} />
      </Routes>
    </Router>
  )
}

export default memo(PublicRoutes)
