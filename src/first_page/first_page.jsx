import React from 'react';
import './first_page.css';
import { Link } from 'react-router-dom';

export default function Main() {

  return (
    <div className='main-container'>
      <span className='nav'>  </span>
      <span className='text'>Jungle Quiz</span>
      <span className='zoo'>ZOO</span>
      <span className='descopera-lumea-fascinanta'>
        Descoperă Lumea Fascinantă a Animalelor <br /> Învață, Repetă,
        Explorează !
      </span>
      <span className='start-button-wrapper'>
        <Link to='/page2' style={{ textDecoration: 'none'}}> <button className='start-button'> Să începem  </button> </Link>
       </span>
      <div className='fundal' />
    </div>
  );
}
