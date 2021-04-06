import React, { useEffect, useState } from "react";
import SingleCountry from "./shared/SingleCountry";
import { getCountry } from "../store/actions/countryActions";
import { connect } from "react-redux";
const ViewCountry = ({ match, rdc, getCountry }) => {
  // showing each country in a single component without a searchbar, and with a special route parameter which is the name of the country
  const { name } = match.params;

  useEffect(() => {
    getCountry(name);
  }, [name]); // calling the action creator method with the country name whenever the name parameter changes
  return (
    <div>
      <SingleCountry country={rdc.country} error={rdc.error} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    rdc: state.getCountryReducer,
  };
};
export default connect(mapStateToProps, { getCountry })(ViewCountry);
