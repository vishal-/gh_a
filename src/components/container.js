import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Offering from "./pages/offering";

const Container = () => {
  return (
    <Router>
      <Switch>
        <Route path="/offering">
          <Offering />
        </Route>
        <Route path="/">
          <Redirect to="/offering" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Container;
