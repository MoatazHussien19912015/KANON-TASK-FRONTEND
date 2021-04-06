import React, { useState, useEffect } from "react";
import { signUp } from "../../store/actions/userActions";
import { connect } from "react-redux";

const SignUp = ({ rdc, signUp, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (evt) => {
    if (evt.target.name == "name") {
      setName(evt.target.value);
    } else if (evt.target.name == "email") {
      setEmail(evt.target.value);
    } else {
      setPassword(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const user = { name, email, password };
    signUp(user); // calling the action creator method
  };

  useEffect(() => {
    if (rdc.token) {
      history.push("/profile");
    }
  }, [rdc.token]); // moving to the profile page when the token value in the state change from null to a value

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={name}
            minLength="3" // the name's minimum length should be 3 characters
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email" // input should have an email format
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
            minLength="6" // the password should be 6 characters at least
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!name || !email || !password}
        >
          {" "}
          {/* disabling the submit button in case any of the input fields is empty */}
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
export default connect(mapStateToProps, { signUp })(SignUp);
