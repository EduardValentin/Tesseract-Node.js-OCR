import React, { Component } from 'react';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }
  fetchImages() {
    fetch('http://localhost:3000/images/user/:id', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        authorization: sessionStorage.getItem('isLoggedIn')
      }
    })
      .then(response => {
        response.json().then(json => {
          this.setState({
            images: json.data
          });
        });
      })
      .catch(err => {
        this.setState({
          error: 'Something wrong happened'
        });
      }); // parses response to JSON
  }
  componentDidMount() {
    this.fetchImages();
  }
  render() {
    const { images } = this.state;
    if (!images) {
      return null;
    }
    console.log(images);
    return (
      <div className="d-flex flex-wrap">
        {images.map(img => (
          <div style={{ width: 200 }} className="img">
            <img
              style={{ width: '100%', height: '100%' }}
              alt=""
              src={'data:image/bmp;base64,' + img.data}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default NewsFeed;
