import React, { useState } from "react";

function AddEvent() {
  const [departments, setDepartments] = useState([]);

  const addDepartment = () => {
    const deptName = prompt("Enter Department Name:");

    if (deptName && deptName.trim() !== "") {
      setDepartments([
        ...departments,
        {
          department: deptName,
          event: "",
        },
      ]);
    }
  };

  const addEvent = (index) => {
    const eventName = prompt("Enter Event Name:");

    if (eventName && eventName.trim() !== "") {
      const updatedDepartments = [...departments];
      updatedDepartments[index].event = eventName;
      setDepartments(updatedDepartments);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Department Event Management</h1>

      <button onClick={addDepartment}>
        Add Department
      </button>

      <table
        border="1"
        cellPadding="10"
        style={{
          marginTop: "20px",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Department</th>
            <th>Event Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {departments.map((dept, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{dept.department}</td>
              <td>{dept.event || "No Event Added"}</td>
              <td>
                <button onClick={() => addEvent(index)}>
                  Add Event
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddEvent;