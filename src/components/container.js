import React from "react";
import Offering from "./pages/offering";
import "../static/styles/container.scss";
import AppService from "../services/app.service";
import { PAGES } from "../config/pages.config";
import Header from "./common/header";

class Container extends React.Component {
  constructor() {
    super();
    this.as = new AppService();
    this.state = { selected: null };
  }

  componentDidMount = () => {
    this.setState({ selected: this.as.getSelectedPage() });
  };

  updateSelection = selected => {
    this.as.updateSelectedPage(selected);
    this.setState({ selected });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="container-fluid">
        <Header selected={selected} updateSelection={this.updateSelection} />

        {selected === PAGES.OFFERING && <Offering />}
      </div>
    );
  }
}

export default Container;
