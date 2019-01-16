import React, { Component } from 'react';
import Header from './header/Header';
import { Switch, Route } from 'react-router-dom';
import Upload from './upload/Upload';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="container-fluid w-100 p-0 main">
        <Header />
        <Switch>
          <Route exact path="/upload" component={Upload} />
        </Switch>
      </div>
    );
  }
}
 
export default Home;