import React from 'react';
import '../public/Header.css';

const Header = () => {
  return (
    <div>
      <div className='Header'>
        <h1>Nasa Photo of the Day</h1>
      </div>
      <div className='Header-info'>
        <div className='Header-item'>This is cool</div>
        <div className='Header-item'>This is cooler</div>
      </div>
    </div>
  )
}

export default Header;
