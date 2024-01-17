import React from 'react';
import './arici.css';
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div className='main-container'>
            <div className='navii-bar'>
                <Link to='/page2'>
                    <button className='buton-animal'>
                        <span className='text-buton-animall'>Animale</span>
                    </button>
                </Link>
                <Link to='/'>
                    <button className='buton-acasa'>
                        <span className='text-buton-acasaa'>Acasă</span>
                    </button>
                </Link>
            </div>
            <div className='flex-row-aa'>
                <span className='acesta-este-unnn'>Acesta este un </span>
                <span className='ari'>ARI....</span>
                <div className='arici-7' />
                <button className='gi-buttonn' id='1'>
                    <span className='gi-textt'>GI</span>
                </button>
                <button className='ghi-buton' id='2'>
                    <span className='ghi-span'>GHI</span>
                </button>
                <button className='ci-buttonn' id='3'>
                    <span className='ci-textt'>CI</span>
                </button>
                <button className='ce-button' id='4'>
                    <span className='ce-textt'>CE</span>
                </button>
                <div className='div-rectangl1'>
                    <div className='divv1'>
            <span className='spann1'>

               <br />
            </span>
                        <span className='span-7'>
              Acest animal își schimbă acele în fiecare an.
                            Ei hibernează timp de
            </span>
                        <span className='empty-space1'> </span>
                    </div>
                </div>
                <div className='rectangle-a'>
                    <span className='addition'>56+72 zile</span>
                </div>
            </div>
            <div className='flex-row1'>
                <button className='frame-buton-22' id='5'>
                    <span className='span-118'>128</span>
                </button>
                <button className='frame-buton-11' id='6'>
                    <span className='span-138'>138</span>
                </button>
                <button className='frame-buton-22' id='7'>
                    <span className='span-118'>118</span>
                </button>
                <button className='frame-buton-33' id='8'>
                    <span className='span-148'>148</span>
                </button>
                <button className='frame-button-raspunde'>
                    <span className='text-raspunde'>Raspunde</span>
                </button>
            </div>
            <div className='fundal-arici' />
        </div>
    );
}
