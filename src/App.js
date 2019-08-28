import React from 'react'
import Login from './Login'
import NavBar from './NavBar'
import Signup from './Signup'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/Home" component={Home}/>
          </Switch>
        </div>
      </Router>
  )
}

export default App;
 