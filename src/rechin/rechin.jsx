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
                <span className='acesta-este-un'>Acesta este un </span>
                <span className='ren'>RE....N</span>
                <div className='rechin-7' />
                <button className='ge-button'>
                    <span className='ge-text'>GE</span>
                </button>
                <button className='gi-buton'>
                    <span className='gi-span'>GI</span>
                </button>
                <button className='ghe-button'>
                    <span className='ghe-text'>GHE</span>
                </button>
                <button className='chi-buton'>
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
                <button className='frame-rr'>
                    <div className='empty-divv'>
                        <span className='span-40'>40</span>
                        <span className='empty-space-1'> </span>
                    </div>
                </button>
                <button className='frame-buton-1'>
                    <span className='span-60'>60</span>
                </button>
                <button className='frame-buton-2'>
                    <span className='span-50'>50</span>
                </button>
                <button className='frame-buton-3'>
                    <span className='span-55'>55</span>
                </button>
            </div>
            <div className='fundal-rechin' />
        </div>
    );
}
