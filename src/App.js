import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages';
import About from './components/pages/About'
import LogIn from './components/pages/LogIn'
import SignIn from './components/pages/SignIn'
import SignInManager from './components/pages/SignInManager'
import UserProfile from './components/pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Navigation/Topbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signin/resident' component={SignIn} />
          <Route path='/login' component={LogIn} />
          <Route path='/profile' component={UserProfile} />
          <Route path='/signin/complex-manager' component={SignInManager} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
