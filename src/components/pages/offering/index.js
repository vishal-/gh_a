import React from "react";
import { OFFERING_FIELDS as fields } from "../../../config/fields.config";
import OfferingService from "../../../services/offering.service";
import AddForm from "../../common/add_form";
import Header from "../../common/header";

class Offering extends React.Component {
  constructor() {
    super();
    this.os = new OfferingService();
    this.initialValues = fields.reduce((o, f) => ({ ...o, [f.label]: "" }), {});
    this.state = { ...this.initialValues };
  }

  changeHandler = (f, v) => {
    this.setState({ [f]: v });
  };

  resetHandler = () => {
    this.setState({ ...this.initialValues });
  };

  submitHandler = async () => {
    await this.os.save({ ...this.state });
  };

  render() {
    return (
      <>
        <Header />
        <article>
          <AddForm
            fields={fields}
            values={this.state}
            changeHandler={this.changeHandler}
            resetHandler={this.resetHandler}
            submitHandler={this.submitHandler}
          />
        </article>
      </>
    );
  }
}

export default Offering;
