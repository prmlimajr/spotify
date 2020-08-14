import React from 'react';
import './Header.css';

export default function index() {
  return (
    <header className='main-header'>
      <div className='search'>
        <input type='text' placeholder='Busque artistas, músicas ou podcasts' />
      </div>

      <div className='user'>
        <img
          src='https://avatars3.githubusercontent.com/u/47723610?v=4'
          alt='Avatar'
        />{' '}
        Paulo Lima
      </div>
    </header>
  );
}
