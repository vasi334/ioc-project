import React from 'react';
import './first_page.css';

export default function Main() {
  return (
    <div className='main-container'>
      <span className='zoo'>ZOO</span>
      <span className='descopera-lumea-fascinanta'>
        Descoperă Lumea Fascinantă a Animalelor <br /> Învață, Repetă,
        Explorează !
      </span>
      <div className='frame'>
        <div className='frame-1'>
          <button className='frame-2'>
            <span className='span-sa-incepem'>SĂ ÎNCEPEM!</span>
          </button>
        </div>
      </div>
      <div className='fundal' />
    </div>
  );
}
