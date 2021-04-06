import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../store/actions/userActions";
import { connect } from "react-redux";
const Header = ({ logOut, rdc }) => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <ul className="navbar-nav mt-3">
          <li className="nav-item active">
            <Link to="/search-country" className="nav-link">
              Country
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/search-countries" className="nav-link">
              Countries
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/all-countries" className="nav-link">
              All Countries
            </Link>
          </li>   {/* hiding the sign up and sign in buttons if the user is already logged in */}
          {!rdc.user.name && (
            <li className="nav-item active">
              <Link to="/sign-up" className="nav-link">
                Sign Up
              </Link>
            </li>
          )}
          {!rdc.user.name && (
            <li className="nav-item active">
              <Link to="/sign-in" className="nav-link">
                Sign In
              </Link>
            </li>
          )}
 {/* showing the user icon with drop down menu if he already stored in the state */}
          {rdc.user.name ? (    
            <li className="nav-item active">
              <div class="dropdown ml-2">
                <div type="" class="dropdown-toggle" data-toggle="dropdown">
                  <div style={{ color: "red" }}>
                    
                    {rdc.user.name}
                    <i
                      class="fas fa-user"
                      style={{ fontSize: "24px", color: "yellow" }}
                    ></i>
                  </div>
                </div>
                <div class="dropdown-menu text-center">
                  <div>
                    
                    <Link
                      to="/profile"
                      style={{
                        color: "red",
                        cursor: "pointer",
                        textDecorationLine: "none",
                      }}
                    >
                      Profile
                    </Link>
                  </div>
                  <div>   {/* moving to the sign in page after logging out and removing the token and the user from the state */}
                    <Link
                      to="/sign-in" 
                      style={{
                        color: "red",
                        cursor: "pointer",
                        textDecorationLine: "none",
                      }}
                      onClick={() => logOut()}
                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    rdc: state.authReducer,
  };
};
export default connect(mapStateToProps, { logOut })(Header);
