import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:3000/users', { mode: 'no-cors' })
      .then(function(response) {
        return response;
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      })
      .catch(error => {
        console.log(error);
      });
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
        console.log(response.json());
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
    this.postData(`http://localhost:3000/register`, this.state)
      .then(data => {
        console.log(JSON.stringify(data));
        history.push('/login');
      })
      .catch(error => console.error(error));

    event.preventDefault();
  }
  render() {
    const { email, username, password, firstName, lastName } = this.state;
    return (
      <div className="container-fluid appear smaller">
        <form onSubmit={this.handleSubmit} className="row smaller">
          <div className="col-6" />
          <div className="d-flex smaller flex-column col-6 justify-content-between">
            <h1>Sign Up</h1>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                value={email}
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                value={username}
                name="username"
                type="text"
                className="form-control"
                placeholder="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                value={password}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                value={firstName}
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                value={lastName}
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
