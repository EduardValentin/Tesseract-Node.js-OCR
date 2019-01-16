import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './auth/AuthPage';
import Home from './Home';



const Main = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  return (
    <Switch>
      <Route
        path="/"
        render={() => {
          if (isLoggedIn) {
            return <Home />;
          }
          return (
            <Redirect
              to={{
                pathname: '/auth/logIn'
              }}
            />
          );
        }}
      />
      <Route path="/auth" render={() => {
        if (isLoggedIn) {
          return <Redirect to={{ pathname: '/'}} />;
        }
        return <AuthPage />;
      }} />
    </Switch>
  );
};

export default Main;
