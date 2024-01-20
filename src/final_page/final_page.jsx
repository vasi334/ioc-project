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
        Ați străbătut cu succes grădina zoologică a cunoasterilor!
        <br></br>
        <br></br>
        <br></br>
        Înapoi la start?
      </span>
      <span className='start-button-wrapper'>
        <Link to='/page2' style={{ textDecoration: 'none'}}> <button className='start-button'> Întoarce-te  </button> </Link>
       </span>
      <div className='fundal' />
    </div>
  );
}
