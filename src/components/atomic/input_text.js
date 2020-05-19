import React from "react";
import US from "../../services/utility.service";

const InputText = ({ field, changeHandler }) => (
  <div className="form-field-wrapper">
    <label>{US.capitalize(field.label)}</label>
    <textarea
      className="form-field"
      onChange={e => {
        changeHandler(field.label, e.target.value);
      }}
    ></textarea>
  </div>
);

export default InputText;
