import React, { useEffect, useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Table from "./Table";
import TableHead from "./TableHead";

function App() {
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("table-app")) || []
  );

  const count = details.length;

  function addDetails(newNote) {
    setDetails((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  useEffect(() => {
    localStorage.setItem("table-app", JSON.stringify(details));
  }, [details]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addDetails} count={count} />
      {/* <TableHead /> */}
      <Table details={details} />
    </div>
  );
}

export default App;
