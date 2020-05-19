import React, { Fragment } from "react";
import InputString from "./input_string";
import InputText from "./input_text";

const FormField = ({ fields, changeHandler, values }) => {
  return fields.map(field => (
    <Fragment key={field.label}>
      {field.type === "string" && (
        <InputString
          field={field}
          changeHandler={changeHandler}
          value={values[field.label]}
        />
      )}

      {field.type === "text" && (
        <InputText field={field} changeHandler={changeHandler} />
      )}
    </Fragment>
  ));
};

export default FormField;
