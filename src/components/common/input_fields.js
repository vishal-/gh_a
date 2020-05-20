import React, { Fragment } from "react";
import InputString from "../atomic/input_string";
import InputText from "../atomic/input_text";

const InputFields = ({ fields, values, changeHandler }) =>
  fields.map(field => (
    <Fragment key={field.label}>
      {field.type === "string" && (
        <InputString
          field={field}
          changeHandler={changeHandler}
          value={values[field.label]}
        />
      )}

      {field.type === "text" && (
        <InputText
          field={field}
          changeHandler={changeHandler}
          value={values[field.label]}
        />
      )}
    </Fragment>
  ));

export default InputFields;
