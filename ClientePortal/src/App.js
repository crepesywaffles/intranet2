import {BrowserRouter,Route,Switch,HashRouter} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import routes from "./config/routing/routes"
import AppRoute from "./config/routing/AppRoute"
import "@fortawesome/fontawesome-free"
import ReactGA from "react-ga"
import { useEffect } from 'react';





function App() {
  ReactGA.initialize(process.env.GOOGLETRACKINGCODE)
  useEffect(()=>(
    ReactGA.pageview(window.location.pathname + window.location.search)
  ))
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {routes.map(route=>(
            <AppRoute
            key={route.path}
            path={route.path}
            component={route.component}
            isPrivate={route.isPrivate}
            exact={route.exact}
            />
          ))}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default (App);
