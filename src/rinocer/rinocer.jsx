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
        <div className='rinocer-6' />
        <button className='ci-button'id='1'>
            <span className='ci'> GE </span>
        </button>
        <button className='gi-button'id='2'>
            <span className='gi'> CE </span>
        </button>
        <button className='frame-button-8'id='3'>
          <span className='span-ghe'> CHE </span>
        </button>
        <button className='ghi-button'id='4'>
            <span className='ghi'> CI </span>
        </button>
        <div className='div-rectangle'>
          <div className='div'>
            <span className='span'>
              
              <br />
            </span>
            <span className='span-9'>
              Acest animal este înrudit cu zebrele și caii.
              <br /> Ei au o înălțime de până la 1.80 metri și pot alerga
              cu viteză până la
            </span>
            <span className='span-a'> </span>
          </div>
        </div>
        <div className='rectangle' />
        <span className='x-x-kg'>210 - 150 km/h</span>
      </div>
      <div className='flex-row-bo'>
      <button className='frame-button-d'id='5'>
          <span className='span-1200'>65</span>
        </button>
        <button className='frame-button-d'id='6'>
          <span className='span-1200'>60</span>
        </button>
        <button className='frame-button-d'id='7'>
          <span className='span-1200'>70</span>
        </button>
        <button className='frame-button-d'id='8'>
          <span className='span-1200'>50</span>
        </button>
        <button className='frame-button-r'>
          <span className='text-raspunde'>Raspunde</span>
        </button>
      </div>
      <div className='fundal-rinocer' />
    </div>
  );
}
