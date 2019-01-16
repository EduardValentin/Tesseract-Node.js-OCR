import React from 'react';
import { Link } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <header>
      <div className="container-fluid w-100 p-0">
        <div className="row no-gutters w-100">
          <div className="col bg-light">
            <Link className="link d-block w-100 h-100 p-3" to="/logIn">
              Log in
            </Link>
          </div>
          <div className="col bg-light border-left">
            <Link className="link w-100 d-block h-100 p-3" to="/signUp">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
