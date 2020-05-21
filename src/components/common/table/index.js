import React from "react";
import TH from "./table.helpers";

const Table = ({ data }) => {
  const tableData = TH.getTableData(data);

  console.log(tableData);

  return (
    <table>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
};

export default Table;
