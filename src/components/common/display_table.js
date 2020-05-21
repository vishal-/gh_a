import React from "react";
import Table from "./table";

const DisplayTable = props => (
  <div className="row mt-4">
    <div className="col-12 text-center">
      <Table {...props} />
    </div>
  </div>
);

export default DisplayTable;
