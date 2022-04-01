import React, { Component } from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light navbar-mod">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge bg-pill bg-secondary">{totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
