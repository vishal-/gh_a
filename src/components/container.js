import React from "react";
import Offering from "./pages/offering";
import "../static/styles/container.scss";
// import CookieService from "../services/cookie.service";

class Container extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <Offering />
      </div>
    );
  }
}

export default Container;
