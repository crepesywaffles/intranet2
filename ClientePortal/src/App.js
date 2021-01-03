import {BrowserRouter,Route} from 'react-router-dom'
import './App.css';
import Login from './containers/Login/Login'
import Home from './containers/Home/Home'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route path="/" exact component={Home}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
