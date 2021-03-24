import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.handleCity}>
        <input
          type="text"
          value={props.value}
          placeholder="Insert city"
          onChange={props.insertCity}
          className="input"
        ></input>
        <button type="submit" className="submit">
          Search cities
        </button>
      </form>
    </>
  );
};

export default Form;
