import React from 'react';
import './second_page.css';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className='main'>
      <div className='nav-div'>
        <Link to='/'> 
          <button className='home'>
            <span className='home-text'>Acasă</span>
          </button>
        </Link>
        
      </div>
      <span className='title-text'>
        Alege animalul tău favorit și începe joaca!
      </span>
      <div className='section'>
        <Link to='/ghepard'> <div className='img-2' /> </Link>
        
        <Link to='/rinocer'> <div className='img-3' /> </Link>
        <Link to='/girafa'> <div className='img-4' /> </Link>
        <Link to='/rechin'> <div className='pic' /> </Link>
      </div>

      <div className='wrapper-2'>
        <Link to='/ghepard'>
          <div className='box'>
            <span className='text-3'>Alege animalul</span>
          </div>
        </Link>
        
        <div className='box-2'>
          <Link to='/rinocer'>
          <span className='text-rhino'>Alege animalul</span>
          </Link>
          
        </div>
        <div className='group'>
          <Link to='/girafa'>
            <span className='text-5'>Alege animalul</span>
          </Link>
          
        </div>
        <div className='wrapper-3'>
          <Link to='/rechin'>
            <span className='text-shark'>Alege animalul</span>
          </Link>
        </div>
      </div>

      <div className='box-3'>
        <Link to=''> <div className='img-5' /> </Link>
        <Link to=''> <div className='img-6' /> </Link>
        <Link to='/cimpanzeu'> <div className='img-7' /> </Link>
        
        
        
      </div>
      <div className='group-2'>
        <div className='group-rabbit'>
          <Link to='/'>
            <span className='text-7'>Alege animalul</span>
          </Link>
        </div>
        <div className='box-4'>
          <Link to='/'>
            <span className='text-8'>Alege animalul</span>
          </Link>
        </div>
        <div className='group-4'>
          <Link to='/cimpanzeu'>
            <span className='text-9'>Alege animalul</span>
          </Link>
        </div>
      </div>
      <div className='fundal-pagina' />
    </div>
  );
}
