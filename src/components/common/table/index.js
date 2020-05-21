import React from "react";
import TH from "./table.helpers";

const Table = ({ data }) => {
  const tblData = TH.getTableData(data);

  return Object.prototype.hasOwnProperty.call(tblData, "columns") &&
    tblData.columns.length > 0 ? (
    <table>
      <thead>
        <tr>
          {tblData.columns.map((c, i) => (
            <th key={`${c}-${i}`}>{c.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d, k) => (
          <tr key={`row-${k}`}>
            {tblData.columns.map((c, i) => (
              <td key={`${c.key}-${i}`}>{d[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div>No Table data</div>
  );
};

export default Table;
