import React from 'react';
import './second_page.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='header'>
        <button className='button-magic-basic'>
          <span className='text'>Acasă</span>
        </button>
      </div>
      <span className='text-2'>
        Alege animalul tău favorit și începe joaca!
      </span>
      <div className='flex-row'>
        <div className='girafa' />
        <div className='ghepard' />
        <div className='rinocer' />
        <div className='cimpanzeu' />
        <div className='rectangle'>
          <span className='alege-animalul'>Alege animalul</span>
        </div>
        <div className='rectangle-1'>
          <span className='alege-animalul-2'>Alege animalul</span>
        </div>
        <div className='rectangle-3'>
          <span className='alege-animalul-4'>Alege animalul</span>
        </div>
        <div className='rectangle-5'>
          <span className='alege-animalul-6'>Alege animalul</span>
        </div>
      </div>
      <div className='flex-row-f'>
        <div className='arici' />
        <div className='chinchila' />
        <div className='rechin' />
        <div className='rectangle-7'>
          <span className='alege-animalul-8'>Alege animalul</span>
        </div>
        <div className='rectangle-9'>
          <span className='alege-animalul-a'>Alege animalul</span>
        </div>
        <div className='rectangle-b'>
          <span className='alege-animalul-c'>Alege animalul</span>
        </div>
      </div>
    </div>
  );
}
