import React from 'react';
import { Link } from 'react-router-dom';

const HeaderPage = () => {
  return (
    <header>
      <div className="container-fluid w-100">
        <div className="row">
          <div className="col bg-light p-3">
            <Link className="link" to="/logIn">
              Log in Boyy
            </Link>
          </div>
          <div className="col bg-primary p-3">
            <Link className="link" to="/signUp">
              Sign up boyy
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
