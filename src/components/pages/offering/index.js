import React from "react";
import FormField from "../../atomic/form_fields";
import { OFFERING_FIELDS as fields } from "../../../config/fields.config";
import OfferingService from "../../../services/offering.service";

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

  reset = () => {
    this.setState({ ...this.initialValues });
  };

  submitHandler = async () => {
    await this.os.save({ ...this.state });
  };

  render() {
    return (
      <div>
        <h2>Offering</h2>
        <article>
          <div className="bottom-stick row">
            <div className="col-10">
              <FormField
                fields={fields}
                changeHandler={this.changeHandler}
                values={this.state}
              />
            </div>

            <div className="col-2">
              <div className="row-cols-1 mt-4">
                <button className="primary" onClick={this.reset}>
                  Reset
                </button>
              </div>
              <div className="row-cols-1 mt-4">
                <button className="primary" onClick={this.submitHandler}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Offering;
