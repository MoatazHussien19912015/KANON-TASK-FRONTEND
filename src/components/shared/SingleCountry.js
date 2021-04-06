import React from "react";
import { withRouter } from "react-router-dom";

const SingleCountry = ({   // destructing the props
  country: { country, neighbours },
  error,
  history,
}) => {
  
  return (
    <div>
      {country ? (
        <div className="d-flex justify-content-start my-5 ml-5">
          {" "}
          {/* rendering the country with its neighbour countries */}
          <img
            className=""
            src={country.flag}
            alt=""
            style={{ width: "600px" }}
          />
          <div className="mt-3" style={{ marginLeft: "200px" }}>
            <h4 className="">{country.name}</h4>
            <p className="font-weight-bold">Capital: {country.capital}</p>
            <p className="font-weight-bold">region: {country.region}</p>
            <p className="font-weight-bold">area: {country.area}</p>
            <p className="font-weight-bold">currency: {country.currency}</p>
            <p className="font-weight-bold">Language: {country.languages}</p>
            <ul className="font-weight-bold">
              Borders:{" "}
              {neighbours.map((neighbour) => (
                <li
                  style={{ cursor: "pointer" }}
                  className="font-weight-bold"
                  onClick={() => {
                    history.push(`/country/${neighbour}`);
                  }}
                >
                  {neighbour}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : error ? (
        <p className="text-center alert alert-danger">{error}</p>
      ) : (
        <div className="text-center">no country to show yet</div>
      )}
    </div>
  );
};
export default withRouter(SingleCountry);
