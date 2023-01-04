import React from "react";

function Table(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Sl No.</th>
          <th>Student Name</th>
          <th>Roll No.</th>
          <th>Checkin Time</th>
          <th>Checkout Time</th>
        </tr>
        {props.details.map((tableItem, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{tableItem.name}</td>
              <td>{tableItem.roll}</td>
              <td>{tableItem.timeIn}</td>
              <td>{tableItem.timeOut}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
