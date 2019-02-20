import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './components/Register'
import LogIn from './components/login'
import forgotPassword from "./components/forgotPassword";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/logIn">LogIn</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
          <Link to="/forgotPassword">forgotPassword</Link>
          </li>
        </ul>
  
        <hr />
        <Route path="/Register" component={Register} />
        <Route path="/forgotPassword" component={forgotPassword} />
        <Route path="/logIn" component={LogIn} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>      
    )
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;