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
          <FormField
            fields={fields}
            changeHandler={this.changeHandler}
            values={this.state}
          />
        </article>
      </div>
    );
  }
}

export default Offering;
