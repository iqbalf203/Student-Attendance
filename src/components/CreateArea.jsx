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

  function clear() {
    localStorage.clear();
  }

  return (
    <div>
      <form className="create-table">
        <label>
          {" "}
          <span>Name:</span>
          <input
            name="name"
            onChange={handleChange}
            value={detail.value}
            placeholder="Name"
            autoComplete="off"
          />
        </label>
        <label>
          {" "}
          <span>Roll No:</span>
          <input
            name="roll"
            onChange={handleChange}
            value={detail.value}
            placeholder="Roll No."
            autoComplete="off"
          />
        </label>
        <label>
          {" "}
          <span>Checkin Time:</span>
          <input
            type="time"
            name="timeIn"
            onChange={handleChange}
            value={detail.value}
          />
        </label>
        <label>
          {" "}
          <span>CheckOut Time:</span>
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
        <button className="btn-clear" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
