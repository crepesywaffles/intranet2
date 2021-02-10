import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import routes from "./config/routing/routes"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes.map(route=>(
            <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
