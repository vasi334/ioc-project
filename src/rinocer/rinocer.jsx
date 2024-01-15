import React from 'react';
import './rinocer.css';
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
        <span className='aceasta-este-o'>Acesta este un </span>
        <span className='rafa'>RINO...R</span>
        <div className='girafa-6' />
        <button className='ci-button'>
            <span className='ci'> GHE </span>
        </button>
        <button className='gi-button'>
            <span className='gi'> CE </span>
        </button>
        <button className='frame-button-8'>
          <span className='span-ghe'>GHI</span>
        </button>
        <button className='ghi-button'>
            <span className='ghi'> CE </span>
        </button>
        <div className='div-rectangle'>
          <div className='div'>
            <span className='span'>
              
              <br />
            </span>
            <span className='span-9'>
              Acest animal este înrudit cu zebrele și caii.
              <br /> Ei au o înălțime de până la 1.80 metri și pot alerga
              cu viteza de până la
            </span>
            <span className='span-a'> </span>
          </div>
        </div>
        <div className='rectangle' />
        <span className='x-x-kg'>210 - 150 km/h</span>
      </div>
      <div className='flex-row-d'>
        <button className='frame-b'>
          <div className='group-3'>
            <span className='text-f'>65</span>
            <span className='nbsp'> </span>
          </div>
        </button>
        <button className='frame-c'>
          <span className='text-11'>60</span>
        </button>
        <button className='frame-button-d'>
          <span className='span-1200'>70</span>
        </button>
        <button className='frame-button-e'>
          <span className='span-800'>50</span>
        </button>
      </div>
      <div className='fundal-girafa' />
    </div>
  );
}
