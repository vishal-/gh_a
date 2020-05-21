import React from "react";
import NavBar from "../atomic/nav_bar";

const Header = props => (
  <header className="py-2">
    <div className="row">
      <div className="col-2"></div>
      <div className="col-10">
        <NavBar {...props} />
      </div>
    </div>
  </header>
);

export default Header;
