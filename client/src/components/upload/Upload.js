import React, { Component } from 'react';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postData = this.postData.bind(this);
  }

  handleSubmit(e) {
    const data = new FormData();
    data.append('data', this.state.image, this.state.image.name);
    // data.append('name',this.state.name);
    this.postData(data).then(() => {
      console.log('sent');
    });

    e.preventDefault();
  }

  postData(data) {
    return fetch('http://localhost:3000/upload', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: data, // body data type must match "Content-Type" header
      headers: {
        Authorization: sessionStorage.getItem('isLoggedIn')
      }
    });
  }

  handleUpload(event) {
    this.setState({
      image: event.target.files[0]
    });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="upload-page">
        {this.state.error && (
          <div className="text-danger">{this.state.error}</div>
        )}
        <form
          style={{ maxWidth: '50%', paddingLeft: '2rem' }}
          onSubmit={this.handleSubmit}
        >
          <div className="upload-btn-wrapper">
            <button onClick={e => e.preventDefault()} className="dbtn">
              Upload a file
            </button>
            <input onChange={this.handleUpload} type="file" name="myfile" />
          </div>
          <div className="form-group">
            <label htmlFor="pic-name"> Name: </label>
            <input
              id="pic-name"
              className="form-control"
              type="text"
              placeholder="Name..."
              name="name"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-sm btn-danger">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Upload;
