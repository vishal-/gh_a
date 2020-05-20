import React from "react";
import InputFields from "./input_fields";

const AddForm = ({
  fields,
  values,
  changeHandler,
  resetHandler,
  submitHandler
}) => (
  <div className="bottom-stick row">
    <div className="col-10">
      <div className="row">
        <InputFields
          fields={fields}
          values={values}
          changeHandler={changeHandler}
        />
      </div>
    </div>

    <div className="col-2">
      <div className="row-cols-1 mt-4">
        <button className="primary" onClick={resetHandler}>
          Reset
        </button>
      </div>
      <div className="row-cols-1 mt-4">
        <button className="primary" onClick={submitHandler}>
          Save
        </button>
      </div>
    </div>
  </div>
);

export default AddForm;
