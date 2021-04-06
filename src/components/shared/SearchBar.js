import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {  // the SearchBar component reused in two different components, each one has its own action creator method
  const [input, set_input] = useState('');   
  const handleChange = (evt) => {
    set_input(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(input);
  };
  return (
    <div className="d-flex justify-content-center my-5">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          onChange={handleChange}
          value={input}
          name="input"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
