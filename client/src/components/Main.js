import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';

const Home = () => <h1>sal persoana logata</h1>;

const Main = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          if (isLoggedIn) {
            return <Home />;
          }
          return (
            <Redirect
              to={{
                pathname: '/logIn'
              }}
            />
          );
        }}
      />
      <Route path="/logIn" component={LogInForm} />
      <Route path="/signUp" component={SignUpForm} />
    </Switch>
  );
};

export default Main;
