import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from '../src/components/Home'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import SignIn from './components/SignIn'



function App() {

  return (
      <Router>
              <Switch>
              <Route exact path ='/' component={Home}></Route>
              <Route exact path ='/LogIn' compontent={LogIn}></Route>
              <Route exact path ='/LoggedOut' component={LogOut}></Route>
              <Route exact path ='/Register' component={SignIn}></Route>
              </Switch>
      </Router>
  );
}

export default App;
