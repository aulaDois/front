import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import HomeClass from "./views/home";
import AboutClass from "./views/about";
import UsersClass from "./views/users";
import NavbarClass from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarClass/>

          <Switch>
            <Route path="/about">
              <AboutClass />
            </Route>
            <Route path="/users">
              <UsersClass />
            </Route>
            <Route path="/">
              <HomeClass />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;