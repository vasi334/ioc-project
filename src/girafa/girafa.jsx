import React from 'react';
import './girafa.css';
import { Link } from 'react-router-dom';


export default function Main() {
  return (
    <div className='main-container'>
      <div className='nav-bar'>
      <Link to='/page2'>
        <button className='buttonu-magic-basic-3'>
            <span className='text-4'>Animale</span>
        </button> 
      </Link>
      <Link to='/'>
        <button className='buttonu-magic-basic-5'>
          <span className='animale'>Acasa</span>
        </button> 
      </Link>
      </div>
      <div className='flex-row-eaad'>
        <span className='aceasta-este-o'>Aceasta este o </span>
        <span className='rafa'>....RAFĂ</span>
        <div className='girafa-6' />
        <button className='ci-button'>
            <span className='ci'> CI </span>
        </button>
        <button className='gi-button'>
            <span className='gi'> GI </span>
        </button>
        <button className='frame-button-8'>
          <span className='span-ghe'>GHE</span>
        </button>
        <button className='ghi-button'>
            <span className='ghi'> GHI </span>
        </button>
        <div className='div-rectangle'>
          <div className='div'>
            <span className='span'>
              
              <br />
            </span>
            <span className='span-9'>
              Ea este cel mai mare animal terestru.
              <br /> Au o înălțime de până la 6 metri și pot să ajungă la o
              greutate de
            </span>
            <span className='span-a'> </span>
          </div>
        </div>
        <div className='rectangle' />
        <span className='x-x-kg'>50 x 12 x 2 kg</span>
      </div>
      <div className='flex-row-d'>
        <button className='frame-b'>
          <div className='group-3'>
            <span className='text-f'>1100</span>
            <span className='nbsp'> </span>
          </div>
        </button>
        <button className='frame-c'>
          <span className='text-11'>600</span>
        </button>
        <button className='frame-button-d'>
          <span className='span-1200'>1200</span>
        </button>
        <button className='frame-button-e'>
          <span className='span-800'>800</span>
        </button>
      </div>
      <div className='fundal-girafa' />
    </div>
  );
}
