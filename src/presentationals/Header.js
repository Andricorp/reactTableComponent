import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Link, Switch } from "react-router-dom";

class Navbar extends Component {
  navbarLinks() {
    if (this.props.authenticated) {
      return [
        <li key="secret">
          <Link to="/details">Details</Link>
        </li>,
        <li key="signout">
          <Link to="/logout">Log out</Link>
        </li>
      ];
    }
    return [
      <li key="signin">
        <Link to="/login">Log in</Link>
      </li>,
      <li key="signup">
        <Link to="/register">Register</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <span className="brand">Home</span>
          </Link>
          <ul>{this.navbarLinks()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Navbar);
