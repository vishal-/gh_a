import React from "react";
import { PAGES } from "../../config/pages.config";
import US from "../../services/utility.service";

const NavBar = ({ selected, updateSelection }) => (
  <ul className="nav-list">
    {Object.keys(PAGES).map(p => (
      <li key={p} className="nav-item">
        <button
          className={`nav ${selected === PAGES[p] ? "selected" : ""}`}
          onClick={() => updateSelection(PAGES[p])}
        >
          {US.capitalize(p)}
        </button>
      </li>
    ))}
  </ul>
);

export default NavBar;
