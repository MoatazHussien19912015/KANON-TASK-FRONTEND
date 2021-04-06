import React from "react";
import { withRouter } from "react-router-dom";

const CountryItem = ({ name, flag, history }) => {
  // destructing the props that passed to represent each country flag with its name
  return (
    <div className="col-3">
      <div className="card " onClick={() => history.push(`/country/${name}`)}> {/* viewing the country by clicking on image or its name */}
        <img className="card-img-top" src={flag} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
        </div>
      </div>
    </div>
  );
};
export default withRouter(CountryItem);
