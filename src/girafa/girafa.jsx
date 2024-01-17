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
        <button className='ci-button' id='1'>
            <span className='ci'> CI </span>
        </button>
        <button className='gi-button' id='2'>
            <span className='gi'> GI </span>
        </button>
        <button className='frame-button-8' id='3'>
          <span className='span-ghe'>GHE</span>
        </button>
        <button className='ghi-button' id='4'>
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
        <button className='frame-button-e' id='5'>
            <span className='span-1200'>1100</span>
          </button>
          <button className='frame-button-e' id='6'>
            <span className='span-1200'>600</span>
          </button>
          <button className='frame-button-e' id='7'>
            <span className='span-1200'>1200</span>
          </button>
          <button className='frame-button-e' id='8'>
            <span className='span-800'>800</span>
          </button>
          <button className='frame-button-raspunde'>
            <span className='text-raspunde'>Raspunde</span>
          </button>
      </div>
      <div className='fundal-girafa' />
    </div>
  );
}
