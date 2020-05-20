import React from "react";
import US from "../../services/utility.service";

const InputText = ({ field, changeHandler, value }) => (
  <div
    className={`form-field-wrapper ${
      field.colsize ? `col-${field.colsize}` : "col-12"
    }`}
  >
    <label>{US.capitalize(field.label)}</label>
    <textarea
      value={value}
      onChange={e => {
        changeHandler(field.label, e.target.value);
      }}
    ></textarea>
  </div>
);

export default InputText;
