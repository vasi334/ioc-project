import React from 'react';
import './rechin.css';
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div className='main-container'>
            <div className='navi-bar'>
                <Link to='/page2'>
                    <button className='button-animal'>
                        <span className='text-button-animal'>Animale</span>
                    </button>
                </Link>
                <Link to='/'>
                    <button className='button-acasa'>
                        <span className='text-button-acasa'>Acasă</span>
                    </button>
                </Link>
            </div>
            <div className='flex-row'>
                <span className='acesta-este-unn'>Acesta este un </span>
                <span className='ren'>RE....N</span>
                <div className='rechin-7' />
                <button className='ge-button' id='1'>
                    <span className='ge-text'>GE</span>
                </button>
                <button className='gi-buton' id='2'>
                    <span className='gi-span'>GI</span>
                </button>
                <button className='ghe-button' id='3'>
                    <span className='ghe-text'>GHE</span>
                </button>
                <button className='chi-buton' id='4'>
                    <span className='chi-text'>CHI</span>
                </button>
                <div className='div-rectangl'>
                    <div className='div1'>
            <span className='span1'>

               <br />
            </span>
                        <span className='span-8'>
              Aceste animale nu au oase și pot să vadă în culori.
                            Ei sunt niște vânători foarte rapizi.
                            Pot să înoate cu viteze de până la
            </span>
                        <span className='empty-spac'> </span>
                    </div>
                </div>
                <div className='rectangle-r'>
                    <span className='multiplication'>12 x 5 km/h</span>
                </div>
            </div>
            <div className='flex-roww'>
            <button className='frame-buton-1' id='5'>
                    <span className='span-60'>40</span>
                </button>
                <button className='frame-buton-1' id='6'>
                    <span className='span-60'>60</span>
                </button>
                <button className='frame-buton-2' id='7'>
                    <span className='span-50'>50</span>
                </button>
                <button className='frame-buton-3' id='8'>
                    <span className='span-55'>55</span>
                </button>
                <button className='frame-button-raspunde'>
                    <span className='text-raspunde'>Raspunde</span>
                </button>
            </div>
            <div className='fundal-rechin' />
        </div>
    );
}
