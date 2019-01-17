import React, { Component } from 'react';
import { Form } from 'reactstrap';

class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  postData(url = ``, data = {}) {
    // Default options are marked with *
    console.log(JSON.stringify(data));
    return fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then(response => {
        response.json().then(j => {
          console.log('login response', j);
          if (j.token !== undefined && response.statusText !== 'Unauthorized') {
            debugger;
            sessionStorage.setItem('isLoggedIn', j.token);
            window.location = '/';
          }
        });
      })
      .catch(err => {
        debugger;
      }); // parses response to JSON
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    const { history } = this.props;
    this.postData(`http://localhost:3000/login`, this.state)
      .then(data => {
        console.log(JSON.stringify(data));
        history.push('/');
      })
      .catch(error => console.error(error));

    event.preventDefault();
  }
  render() {
    const { username, password } = this.state;

    return (
      <div className="container-fluid appear  smaller">
        <Form className="smaller row" onSubmit={this.handleSubmit}>
          <div className="d-flex justify-content-between smaller flex-column col-6">
            <h1>Log In</h1>
            <div className="form-group">
              <label for="exampleInputEmail1">username</label>
              <input
                value={username}
                name="username"
                type="text"
                className="form-control"
                placeholder="Enter username"
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll share your username with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                value={password}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
          <div className="col-6" />
        </Form>
      </div>
    );
  }
}

export default LogInForm;
