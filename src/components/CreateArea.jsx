import { useState } from "react";

function CreateArea(props) {
  const [detail, setDetail] = useState({
    name: "",
    roll: "",
    timeIn: "",
    timeOut: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);

    setDetail((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitDetail(event) {
    props.onAdd(detail);
    setDetail({
      name: "",
      roll: "",
      timeIn: "",
      timeOut: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-table">
        <label>
          {" "}
          Name:
          <input
            name="name"
            onChange={handleChange}
            value={detail.value}
            placeholder="Name"
          />
        </label>
        <label>
          {" "}
          Roll No:
          <input
            name="roll"
            onChange={handleChange}
            value={detail.value}
            placeholder="Roll No."
          />
        </label>
        <label>
          {" "}
          Checkin Time:
          <input
            type="time"
            name="timeIn"
            onChange={handleChange}
            value={detail.value}
          />
        </label>
        <label>
          {" "}
          CheckOut Time:
          <input
            type="time"
            name="timeOut"
            onChange={handleChange}
            value={detail.value}
          />
        </label>
        <button className="sub-btn" onClick={submitDetail}>
          Add
        </button>
        <button className="tStudents">
          Total Students: <strong>{props.count}</strong>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
