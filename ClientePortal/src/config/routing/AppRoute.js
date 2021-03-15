import React from "react"
import {Route} from "react-router-dom"
import userIsLoggedIn from "../../utils/userIsLoggedIn"

export default function AppRoute({
    component: Component,
    path,
    isPrivate,
    ...props
  }) {
    return (
      <Route
        path={path}
        render={props =>
          isPrivate && !userIsLoggedIn() ? (
            <div>Por favor, inicia sesión</div>
          ) : (
            <Component {...props} />
          )
        }
        {...props}
      />
    );
  }