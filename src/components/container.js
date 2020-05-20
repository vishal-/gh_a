import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Offering from "./pages/offering";
import "../static/styles/container.scss";

const Container = () => {
  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/offering">
            <Offering />
          </Route>
          <Route path="/">
            <Redirect to="/offering" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Container;
