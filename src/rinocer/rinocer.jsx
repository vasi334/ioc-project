import React, {useState} from 'react';
import './rinocer.css';
import { Link } from 'react-router-dom';


export default function Main() {

  
  const [activeButton1, setActiveButton1] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);

  const [isCorrectPopupOpen, setCorrectPopupOpen] = useState(false);
  const [isWrongPopupOpen, setWrongPopupOpen] = useState(false);

  const switchPopUp = () => {
    if(activeButton1 === '2' && activeButton2 === '6'){
      setCorrectPopupOpen(!isCorrectPopupOpen); 
      const button1 = document.getElementById('2');
      const button2 = document.getElementById('6');
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
        <span className='aceasta-este-o'>Acesta este un </span>
        <span className='rafa'>RINO...R</span>
        <div className='rinocer-6' />
        <button className='ci-button'id='1' onClick={() => handleButtonClick1('1')} style={{ background: activeButton1 == '1' ? 'yellow' : '#fbe1b1' }}>
            <span className='ci'> GE </span>
        </button>
        <button className='gi-button'id='2' onClick={() => handleButtonClick1('2')} style={{ background: activeButton1 == '2' ? 'yellow' : '#fbe1b1' }}>
            <span className='gi'> CE </span>
        </button>
        <button className='frame-button-8'id='3' onClick={() => handleButtonClick1('3')} style={{ background: activeButton1 == '3' ? 'yellow' : '#fbe1b1' }}>
          <span className='span-ghe'> CHE </span>
        </button>
        <button className='ghi-button'id='4' onClick={() => handleButtonClick1('4')} style={{ background: activeButton1 == '4' ? 'yellow' : '#fbe1b1' }}>
            <span className='ghi'> CI </span>
        </button>
        <div className='div-rectangle'>
          <div className='div'>
            <span className='span'>
              
              <br />
            </span>
            <span className='span-9'>
              Acest animal este înrudit cu zebrele și caii.
              <br /> Ei au o înălțime de până la 1.80 metri și pot alerga
              cu viteză până la
            </span>
            <span className='span-a'> </span>
          </div>
        </div>
        <div className='rectangle' />
        <span className='x-x-kg'>210 - 150 km/h</span>
      </div>
      <div className='flex-row-bo'>
      <button className='frame-button-d'id='5' onClick={() => handleButtonClick2('5')} style={{ background: activeButton2 == '5'  ? 'yellow' : '#fbe1b1' }}>
          <span className='span-1200'>65</span>
        </button>
        <button className='frame-button-d'id='6' onClick={() => handleButtonClick2('6')} style={{ background: activeButton2 == '6'  ? 'yellow' : '#fbe1b1' }}>
          <span className='span-1200'>60</span>
        </button>
        <button className='frame-button-d'id='7' onClick={() => handleButtonClick2('7')} style={{ background: activeButton2 == '7'  ? 'yellow' : '#fbe1b1' }}>
          <span className='span-1200'>70</span>
        </button>
        <button className='frame-button-d'id='8' onClick={() => handleButtonClick2('8')} style={{ background: activeButton2 == '8'  ? 'yellow' : '#fbe1b1' }}>
          <span className='span-1200'>50</span>
        </button>
        <button className='frame-button-r' onClick={switchPopUp}>
          <span className='text-raspunde'>Raspunde</span>
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
            <Link to='/girafa'> <button className='button-continua'> Continua </button> </Link>
          </div>
        )}

      <div className='fundal-rinocer' />
    </div>
  );
}
