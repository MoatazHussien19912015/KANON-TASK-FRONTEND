import React, { useState, useEffect } from "react";
import { signIn } from "../../store/actions/userActions";
import { connect } from "react-redux";

const SignIn = ({ rdc, signIn, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (evt) => {
    if (evt.target.name == "email") {
      setEmail(evt.target.value);
    } else {
      setPassword(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const user = { email, password };
    signIn(user); // calling the action creator method
  };

  useEffect(() => {
    if (rdc.token) {
      history.push("/profile");
    } // moving to the profile page when the token value in the state change from null to a value
  }, [rdc.token]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            id="pwd"
            name="password"
            onChange={handleInputChange}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {rdc.error ? (
        <p className="text-center alert alert-danger">{rdc.error}</p>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    rdc: state.authReducer,
  };
};
export default connect(mapStateToProps, { signIn })(SignIn);
