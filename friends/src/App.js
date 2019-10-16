import React from 'react';
import './App.css';

import Friends from "./components/Friends";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </nav>

        <Switch>

          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
