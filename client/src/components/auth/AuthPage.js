import React, {Component, Fragment} from 'react';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import LoginHeaderPage from './LoginHeaderPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class AuthPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){

    return (
      <Fragment>
        <LoginHeaderPage />
        <Switch>
          <Route exact path="/auth/logIn" component={LogInForm} />
          <Route exact path="/auth/signUp" component={SignUpForm} />
          <Route render={() => <Redirect to={{ pathname: "/auth/logIn" }} /> } />
        </Switch>
      </Fragment>
    );
  }
}

export default AuthPage;