import React from 'react';
import './App.css';

import Friends from "./components/Friends";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import styled from "styled-components";

const StyledNav = styled.nav`
padding: 20px;
margin: 20px;
a{
  margin: 20px;
  text-decoration: none;
  color: black;
  font-size: 30px;
  &:hover{
    letter-spacing: 3px; 
  }
}
`;

function App() {
  return (
    <Router>
      <div className="App">

      <h1>Private Friend</h1>

      <div>
        {/* Nav */}
        <StyledNav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </StyledNav>
      </div>

      <div>
        <Switch>
       
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
      
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
