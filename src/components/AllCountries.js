import React, { useState, useEffect } from "react";
import CountryItem from "./CountryItem";
import { getAllCountries } from "../store/actions/countryActions";
import { connect } from "react-redux";
const AllCountries = ({getAllCountries, rdc}) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    getAllCountries();
    setCountries((countries) => [...countries, ...rdc.countries]);
  }, [JSON.stringify(rdc.countries)]); // this trick is to avoid infinite loop
  const handleFilter = () => {
    if (filter.trim()) {
      // making sure the filter contain no white spaces
      setCountries((countries) => [
        ...countries.filter(
          (c) => c.name.toLowerCase().search(filter.toLowerCase()) > -1
        ),
      ]);
    } else {
      setCountries((countries) => [...rdc.countries]); // returning the list of the countries before filtering
    }
  };
  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleFilter(filter);
  };
  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          onChange={handleChange}
          value={filter}
          name="filter"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="row">
        {countries.length ? (
          countries.map((country, i) => (
            <CountryItem key={i} name={country.name} flag={country.flag} />
          ))
        ) : (
          <p>no countries loaded yet</p>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    rdc: state.getAllCountriesReducer,
  };
};
export default connect(mapStateToProps, { getAllCountries })(AllCountries);
