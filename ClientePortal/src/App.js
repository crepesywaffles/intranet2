import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import routes from "./config/routing/routes"
import AppRoute from "./config/routing/AppRoute"
import "@fortawesome/fontawesome-free"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
