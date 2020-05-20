import React from "react";
import US from "../../services/utility.service";

const InputString = ({ field, changeHandler, value }) => (
  <div
    className={`form-field-wrapper ${
      field.colsize ? `col-${field.colsize}` : "col-12"
    }`}
  >
    <label>{US.capitalize(field.label)}</label>
    <input
      type="text"
      value={value}
      onChange={e => {
        changeHandler(field.label, e.target.value);
      }}
    />
  </div>
);

export default InputString;
