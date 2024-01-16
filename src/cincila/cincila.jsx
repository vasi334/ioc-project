import React from 'react';
import './cincila.css';
import {Link} from "react-router-dom";

export default function Main() {
  return (
    <div className='main-container'>
      <div className='nav-bar'>
        <Link to='/page2'>
          <button className='buttonu-animale'>
            <span className='text-animale'>Animale</span>
          </button>
        </Link>
        <Link to='/'>
          <button className='buttonu-acasa'>
            <span className='text-acasa'>Acasa</span>
          </button>
        </Link>
      </div>
      <div className='flex-row-ce'>
        <span className='aceasta-este-o-cincila'>Aceasta este o </span>
        <span className='la'>..N..LA</span>
        <div className='cincila-7' />
        <button className='gi-button-cincila'>
          <span className='gi-cincila'>GI</span>
        </button>
        <button className='ghi-button-cincila'>
          <span className='span-ghi-cincila'>GHI</span>
        </button>
        <button className='frame-ci-cincila'>
          <span className='span-ci-cincila'>CI</span>
        </button>
        <button className='frame-button-ce-cincila'>
          <span className='span-ce-cincila'>CE</span>
        </button>
        <div className='div-rectangle-cincila'>
          <div className='div-el-este-cincila'>
            <span className='span-empty'>
              
              <br />
            </span>
            <span className='span-text-cincila'>
              In salbaticie acest animal se spala in cenusa vulcanica.
              <br /> El este un animal nocturn, iar ziua doarme pana la
            </span>
          </div>
        </div>
        <div className='div-rectangle-q' />
        <span className='span-ore'>543-523 ore</span>
      </div>
      <div className='div-flex-row-cincila'>
        <button className='frame-button-19-cincila'>
          <span className='empty-19-cincila'>19</span>
        </button>
        <button className='frame-button-19-cincila'>
          <span className='empty-19-cincila'>18</span>
        </button>
        <button className='frame-button-19-cincila'>
          <span className='empty-17-cincila'>17</span>
        </button>
        <button className='frame-button-19-cincila'>
          <span className='empty-8-cincila'>8</span>
        </button>
      </div>
      <div className='fundal-cincila' />
    </div>
  );
}