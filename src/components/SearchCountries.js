import React from "react";
import { searchCountries } from "../store/actions/countryActions";
import SearchBar from "./shared/SearchBar";
import SingleCountry from "./shared/SingleCountry";
import { connect } from "react-redux";
const SearchCountries = ({ rdc, searchCountries }) => {
  return (
    <div className="container-fluid">
      <SearchBar handleSearch={searchCountries} />   {/* passing the action creator method to the SearchBar component */}

      {rdc.countries.length ? ( // rendering the returned countries after they sent from the server and stored in the state
        rdc.countries.map((country) => {
          return <SingleCountry country={country} error={rdc.error} />;
        })
      ) : rdc.error ? (
        <p className="text-center alert alert-danger">{rdc.error}</p>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    rdc: state.searchCountryReducer,
  };
};
export default connect(mapStateToProps, { searchCountries })(SearchCountries);
