import React from "react";
import { OFFERING_FIELDS as fields } from "../../../config/fields.config";
import OfferingService from "../../../services/offering.service";
import AddForm from "../../common/add_form";
import Table from "../../common/table";

class Offering extends React.Component {
  constructor() {
    super();
    this.os = new OfferingService();
    this.initialValues = fields.reduce((o, f) => ({ ...o, [f.label]: "" }), {});
    this.state = { ...this.initialValues, offerings: [] };
  }

  componentDidMount = async () => {
    this.setState({ offerings: await this.os.fetch() });
  };

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
      <article>
        <div className="row">
          <div className="col-12">
            <Table data={this.state.offerings} />
          </div>
        </div>
        <AddForm
          fields={fields}
          values={this.state}
          changeHandler={this.changeHandler}
          resetHandler={this.resetHandler}
          submitHandler={this.submitHandler}
        />
      </article>
    );
  }
}

export default Offering;
