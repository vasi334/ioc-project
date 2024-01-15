import React from 'react';
import './cimpanzeu.css';
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className='main-container'>
      <div className='headerr'>
      <Link to='/page2'>
        <button className='buttonu-animal'>
            <span className='text-buton-animal'>Animale</span>
        </button>
      </Link>
      <Link to='/'>
        <button className='buttonu-acasa'>
            <span className='text-buton-acasa'>Acasă</span>
        </button>
      </Link>
      </div>
      <div className='flex-row-a'>
        <span className='acesta-este-un-text'>Acesta este un </span>
        <span className='mpanzeu'>....MPANZEU</span>
        <div className='cimpanzeu-7' />
        <button className='chi-button'>
            <span className='chi'>CHI</span>
        </button>
        <button className='frame-888'>
            <span className='ci-text'>CI</span>
        </button>
        <button className='frame-9'>
          <span className='ce-text'>CE</span>
        </button>
        <button className='frame-a'>
          <span className='gi-text'>GI</span>
        </button>
        <div className='div-rectanglee'>
          <div className='divv'>
            <span className='spann'>
                
               <br />
            </span>
            <span className='span-99'>
              Acesta este un animal omnivor, adică mănâncă atât iarbă, cât și carne. 
              <br /> El se aseamănă cu oamenii în proporție de aproape
            </span>
            <span className='empty-spacee'> </span>
          </div>
        </div>
        <div className='rectangle-e'>
          <span className='percentage'>125-27 %</span>
        </div>
      </div>
      <div className='flex-row-fa'>
        <button className='frame-f'>
          <div className='empty-div'>
            <span className='number'>97</span>
            <span className='empty-space-10'> </span>
          </div>
        </button>
        <button className='frame-buttonn'>
          <span className='span-98'>98</span>
        </button>
        <button className='frame-button-11'>
          <span className='span-999'>99</span>
        </button>
        <button className='frame-button-12'>
          <span className='span-100'>100</span>
        </button>
      </div>
      <div className='fundal-cimpanzeu' />
    </div>
  );
}
