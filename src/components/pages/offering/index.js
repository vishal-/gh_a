import React from "react";
import FormField from "../../atomic/form_fields";
import { OFFERING_FIELDS as fields } from "../../../config/fields.config";

class Offering extends React.Component {
  constructor() {
    super();

    this.state = fields.reduce((o, f) => ({ ...o, [f.label]: "" }), {});
  }

  changeHandler = (f, v) => {
    console.log(f, v);
    this.setState({ [f]: v });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <h2>Offering</h2>
        <article>
          <div className="bottom-stick">
            <div className="w-80">
              <FormField
                fields={fields}
                changeHandler={this.changeHandler}
                values={this.state}
              />
            </div>

            <div className="form-field-wrapper w-20">
              <div className="">
                <button>Reset</button>
              </div>
              <div className="">
                <button>Save</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Offering;
