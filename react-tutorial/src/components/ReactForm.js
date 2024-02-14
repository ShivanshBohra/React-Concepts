import React, { useState } from "react";

const ReactForm = () => {
  const [name, setName] = useState("");
  function handleChange(e){
    console.log(e.target.value)
    setName(e.target.value)
  }
  return (
    <>
      <form className="App">
        <label>First Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default ReactForm;
