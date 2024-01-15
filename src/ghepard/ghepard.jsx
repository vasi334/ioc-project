import React from 'react';
import './ghepard.css';
import {Link} from "react-router-dom";

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
      <div className='flex-row-ce'>
        <span className='acesta-este-un'>Acesta este un </span>
        <span className='pard'>....PARD</span>
        <div className='ghepard-7' />
        <button className='frame-button-1'>
          <span className='ge'>GE</span>
        </button>
        <button className='frame-button'>
          <span className='span-gi'>GI</span>
        </button>
        <button className='frame-button-8'>
          <span className='span-ghe'>GHE</span>
        </button>
        <button className='frame-button-9'>
          <span className='span-che'>CHE</span>
        </button>
        <div className='div-rectangle'>
          <div className='div-el-este'>
            <span className='span-empty'>
              
              <br />
            </span>
            <span className='span-text'>
              El este una dintre felinele mari și cel mai rapid animal terestru.
              <br /> Acesta aleargă cu viteze de până la
            </span>
          </div>
        </div>
        <div className='div-rectangle-a' />
        <span className='span-kmh'>578-463 km/h</span>
      </div>
      <div className='div-flex-row'>
        <button className='frame-button-c'>
          <span className='empty-d'>116</span>
        </button>
        <button className='frame-button-c'>
          <span className='empty-d'>123</span>
        </button>
        <button className='frame-button-c'>
          <span className='empty-f'>115</span>
        </button>
        <button className='frame-button-c'>
          <span className='empty-11'>125</span>
        </button>
      </div>
      <div className='fundal-ghepard' />
    </div>
  );
}
