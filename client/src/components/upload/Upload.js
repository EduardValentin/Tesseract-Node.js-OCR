import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    const data = new FormData()
    data.append('file', this.state.image, this.state.image.name)
    data.append('image_name',this.state.name);
    debugger
    return fetch('http://localhost:3000/upload', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: data // body data type must match "Content-Type" header
    })
      .then(response => {
        // redirect to success
        window.location = '/upload/succes';

      })
      .catch(err => {
        // redirect to error
        this.setState({
          error: 'Something wrong happened'
        })
        window.location = '/upload';
      }); // parses response to JSON
  }
  handleUpload(event){
    this.setState({
      image: event.target.files[0],
    })
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
        {this.state.error && <div className="text-danger">{this.state.error}</div>}
        <form style={{maxWidth: '50%', paddingLeft: '2rem'}} onSubmit={this.handleSubmit}>
          <div className="upload-btn-wrapper">
            <button onClick={(e) => e.preventDefault()} className="dbtn">Upload a file</button>
            <input onChange={this.handleUpload} type="file" name="myfile" />
          </div>
          <div className="form-group">
            <label htmlFor="pic-name"> Name: </label>
            <input id="pic-name" className="form-control" type="text" placeholder="Name..." name="name" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-sm btn-danger">Submit</button>
        </form>
      </div>
    );
  }
}
 
export default Upload;