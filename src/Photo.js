import React, { Component } from 'react';
import axios from 'axios';
import '../public/Photo.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'https://api.nasa.gov/planetary/apod?api_key=QKZsNPOo4jP0UVwr7nEjGFuZFt9JEOjyE5Ia7AsU',
    }
  }

  componentDidMount() {
    axios
      .get(this.state.url)
      .then(res => {
        const data = res;
        this.setState({
          image: data.data.url,
          title: data.data.title
        });
        console.log(this.state.image);
        console.log(this.state.title);
      })
      .catch(err => {
        console.log('sorry, something isn\'t working');
      });
  }


  render() {
    var photoStyle = {
      backgroundImage: `url(${this.state.image})`
    }
    return (
      <div className='Photo' style={photoStyle}>
        <div className='Photo-info'>
          <div className='Photo-item'>
            <h4>NASA Photo of The Day</h4>
          </div>
          <div className='Photo-item right'>
            <h4>{this.state.title}</h4>
          </div>
          <div className='Photo-item'>
            <h6>Made with love by <a href="https://cyclokitty.github.io/" target='blank'><span className='Photo-link'>Laura Veee</span></a></h6>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
