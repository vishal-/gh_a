import React from "react";
import NavBar from "../atomic/nav_bar";

const Header = props => (
  <header className="py-2">
    <div className="row">
      <div className="col-12 text-center">
        <NavBar {...props} />
      </div>
    </div>
  </header>
);

export default Header;
