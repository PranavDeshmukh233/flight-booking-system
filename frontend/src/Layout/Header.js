import React, { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { auth, clearAuthInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logout Successful!");
    clearAuthInfo();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            SkyTrip
          </Link>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                style={{ fontWeight: "bold" }}
              >
                Home
              </NavLink>
            </li>
            {auth.token ? (
              <>
                <li className="nav-item">
                  <NavLink
                    to="/profile"
                    className="nav-link"
                    style={{ fontWeight: "bold" }}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    style={{ fontWeight: "bold", textDecoration: "none" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  style={{ fontWeight: "bold" }}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
