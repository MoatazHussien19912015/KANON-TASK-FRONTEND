import React, { useState } from "react";
import { getCountry } from "../store/actions/countryActions";
import { connect } from "react-redux";
import SearchBar from "./shared/SearchBar";
import SingleCountry from "./shared/SingleCountry";
const SearchCountry = ({ rdc, getCountry }) => {
  return (
    <div className="container-fluid">
      <SearchBar handleSearch={getCountry} />    {/* passing the action creator method to the SearchBar component */}

      <SingleCountry country={rdc.country} error={rdc.error} />  {/* passing the props to the SingleCountry component */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    rdc: state.getCountryReducer,
  };
};
export default connect(mapStateToProps, { getCountry })(SearchCountry);
