import React, {useState} from 'react';
import './girafa.css';
import { Link } from 'react-router-dom';


export default function Main() {

  const [activeButton1, setActiveButton1] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);

  const [isCorrectPopupOpen, setCorrectPopupOpen] = useState(false);
  const [isWrongPopupOpen, setWrongPopupOpen] = useState(false);

  const switchPopUp = () => {
    if(activeButton1 === '2' && activeButton2 === '7'){
      setCorrectPopupOpen(!isCorrectPopupOpen); 
      const button1 = document.getElementById('2');
      const button2 = document.getElementById('7');
      if (button1 && button2) {
        button1.style.backgroundColor = 'green';
        button2.style.backgroundColor = 'green';
      }
    }
    else if(activeButton1===null || activeButton2 === null){
      alert("Selectati ambele raspunsuri si apasati 'Raspunde'!")
    }
    else{
      setWrongPopupOpen(!isWrongPopupOpen)
    }
  };

  const handleButtonClick1 = (index) => {

    if (activeButton1 === index) {
      setActiveButton1(null);
    } else {
      if (activeButton1 !== null) {
        setActiveButton1(null);
      }
      setActiveButton1(index);
    }
  };

  const handleButtonClick2 = (index) => {

    if (activeButton2 === index) {
      setActiveButton2(null);
    }
    else {
      if (activeButton2 !== null) {
        setActiveButton2(null);
      }
      setActiveButton2(index);
    }
  };

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
        <span className='aceasta-este-o'>Aceasta este o </span>
        <span className='rafa'>....RAFĂ</span>
        <div className='girafa-6' />
        <button className='ci-button' id='1' onClick={() => handleButtonClick1('1')} style={{ background: activeButton1 == '1' ? 'yellow' : '#fbe1b1' }}>
            <span className='ci'> CI </span>
        </button>
        <button className='gi-button' id='2' onClick={() => handleButtonClick1('2')} style={{ background: activeButton1 == '2' ? 'yellow' : '#fbe1b1' }}>
            <span className='gi'> GI </span>
        </button>
        <button className='frame-button-8' id='3' onClick={() => handleButtonClick1('3')} style={{ background: activeButton1 == '3' ? 'yellow' : '#fbe1b1' }}>
          <span className='span-ghe'>GHE</span>
        </button>
        <button className='ghi-button' id='4' onClick={() => handleButtonClick1('4')} style={{ background: activeButton1 == '4' ? 'yellow' : '#fbe1b1' }}>
            <span className='ghi'> GHI </span>
        </button>
        <div className='div-rectangle'>
          <div className='div'>
            <span className='span'>
              
              <br />
            </span>
            <span className='span-9'>
              Ea este cel mai mare animal terestru.
              <br /> Au o înălțime de până la 6 metri și pot să ajungă la o
              greutate de
            </span>
            <span className='span-a'> </span>
          </div>
        </div>
        <div className='rectangle' />
        <span className='x-x-kg'>50 x 12 x 2 kg</span>
      </div>
      <div className='flex-row-d'>
        <button className='frame-button-e' id='5' onClick={() => handleButtonClick2('5')} style={{ background: activeButton2 == '5'  ? 'yellow' : '#fbe1b1' }}>
            <span className='span-1200'>1100</span>
          </button>
          <button className='frame-button-e' id='6' onClick={() => handleButtonClick2('6')} style={{ background: activeButton2 == '6'  ? 'yellow' : '#fbe1b1' }}>
            <span className='span-1200'>600</span>
          </button>
          <button className='frame-button-e' id='7' onClick={() => handleButtonClick2('7')} style={{ background: activeButton2 == '7'  ? 'yellow' : '#fbe1b1' }}>
            <span className='span-1200'>1200</span>
          </button>
          <button className='frame-button-e' id='8' onClick={() => handleButtonClick2('8')} style={{ background: activeButton2 == '8'  ? 'yellow' : '#fbe1b1' }}>
            <span className='span-800'>800</span>
          </button>
          <button className='frame-button-raspunde-girafa' onClick={() => switchPopUp()}>
            <span className='text-raspunde-girafa'>Raspunde</span>
          </button>
      </div>

      {isWrongPopupOpen && (
          <div className="wrong-popup">
            <button className='close-button' onClick={switchPopUp}>X</button>
            <p>Raspuns gresit!</p>
            <p2> Incearca din nou </p2>
          </div>
      )}

      {isCorrectPopupOpen && (
        <div className="correct-popup">
          <button className='close-button' onClick={switchPopUp}>X</button>
          <p>Raspuns corect! </p>
          <Link to='/rinocer'> <button className='button-continua'> Continua </button> </Link>
        </div>
      )}
      
      <div className='fundal-girafa' />
    </div>
  );
}
