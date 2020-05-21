import React from "react";
import Offering from "./pages/offering";
import "../static/styles/container.scss";
import AppService from "../services/app.service";
import { PAGES } from "../config/pages.config";

class Container extends React.Component {
  constructor() {
    super();
    this.as = new AppService();
    this.state = { selected: null };
  }

  componentDidMount = () => {
    const selected = this.as.getSelectedPage();

    console.log(selected);
    console.log(selected === PAGES.OFFERING);

    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="container-fluid">
        {selected === PAGES.OFFERING && <Offering />}
      </div>
    );
  }
}

export default Container;
