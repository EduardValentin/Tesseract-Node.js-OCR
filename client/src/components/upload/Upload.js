import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  onDrop(acceptedFiles, rejectedFiles){
    console.log(JSON.stringify(acceptedFiles));
    debugger
    // return fetch('http://localhost:3000/upload', {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8'
    //     // "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   redirect: 'follow', // manual, *follow, error
    //   referrer: 'no-referrer', // no-referrer, *client
    //   body: JSON.stringify(data) // body data type must match "Content-Type" header
    // })
    //   .then(response => {
    //     // redirect to success

    //   })
    //   .catch(err => {
    //     // redirect to error
    //   }); // parses response to JSON
  }

  render() { 
    return (
      <div>
        <Dropzone onDrop={(files) => this.onDrop(files)} >
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
      </div>
    );
  }
}
 
export default Upload;