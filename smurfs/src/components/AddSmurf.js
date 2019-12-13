import React from "react";

const AddSmurf = () => {
  return (
    <div>
      <h1>Add Smurf</h1>
      <form>
        <input type="text" placeholder="Enter Name"></input>
        <input type="text" placeholder="Enter Age"></input>
        <input type="text" placeholder="Enter Height"></input>
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default AddSmurf;
