import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <div className="nav align-items-center w-100 justify-content-start py-2 px-5 d-flex row">
      <div className="col-1 ml-6 px-2">
        <NavLink activeClassName="selected" to="/">
          Home
        </NavLink>
      </div>
      <div className="col-1 px-2">
        <NavLink activeClassName="selected" to="/upload">
          Upload
        </NavLink>
      </div>
      <div className="col-1 px-2">
        <NavLink activeClassName="selected" to="/news-feed">
          News feed
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
