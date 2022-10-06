import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ isActive }) => {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid nav__container">
        <Link className="navbar-brand" to="/">
          GVS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav__container__menu"
          id="navbarNav"
        >
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "home" ? "active" : null}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive === "browse" ? "active" : null
                }`}
                to="/browse"
              >
                Games
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive === "cart" ? "active" : null}`}
                to="/cart"
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isActive === "checkout" ? "active" : null
                }`}
                to="/checkout"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
