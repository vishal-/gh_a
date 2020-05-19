import React from "react";
import US from "../../services/utility.service";

const InputString = ({ field, changeHandler, value }) => (
  <div className="form-field-wrapper">
    <label>{US.capitalize(field.label)}</label>
    <input
      type="text"
      value={value}
      className="form-field"
      onChange={e => {
        changeHandler(field.label, e.target.value);
      }}
    />
  </div>
);

export default InputString;
