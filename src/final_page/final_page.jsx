import React from 'react';
import './final_page.css';
import { Link } from 'react-router-dom';

export default function Main() {

  return (
    <div className='main-container'>
      <span className='nav'>  </span>
      <span className='text'>Jungle Quiz</span>
      <span className='zoo'>Felicitări, exploratori Jungle Quiz!</span>
      <span className='descopera-lumea-fascinanta'>
        Ati străbătut cu succes grădina zoologică a cunoasterilor!
        <br></br>
        <br></br>
        <br></br>
        Inapoi la start?
      </span>
      <span className='start-button-wrapper'>
        <Link to='/page2' style={{ textDecoration: 'none'}}> <button className='start-button'> Intoarce-te  </button> </Link>
       </span>
      <div className='fundal' />
    </div>
  );
}
