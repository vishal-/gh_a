import React from "react";
import TH from "./table.helpers";
import "./table.styles.scss";

const Table = ({ data, options }) => {
  const tblData = TH.getTableData(data, options);

  console.log(tblData, options);

  return Object.prototype.hasOwnProperty.call(tblData, "columns") &&
    tblData.columns.length > 0 ? (
    <table className="gh-tbl">
      <thead>
        <tr className="gh-tbl-hd-tr">
          {tblData.columns.map((c, i) => (
            <th key={`${c}-${i}`} className="gh-tbl-hd-td">
              {c.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d, k) => (
          <tr key={`row-${k}`} className="gh-tbl-bd-tr">
            {tblData.columns.map((c, i) => (
              <td key={`${c.key}-${i}`} className="gh-tbl-bd-td">
                {d[c.key]}
              </td>
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
