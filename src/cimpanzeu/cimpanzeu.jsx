import React, {useState} from 'react';
import './cimpanzeu.css';
import { Link } from 'react-router-dom'

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
      <div className='headerr'>
      <Link to='/page2'>
        <button className='buttonu-animal'>
            <span className='text-buton-animal'>Animale</span>
        </button>
      </Link>
      <Link to='/'>
        <button className='buttonu-acasaa'>
            <span className='text-buton-acasa'>Acasă</span>
        </button>
      </Link>
      </div>
      <div className='flex-row-a'>
        <span className='acesta-este-un-text'>Acesta este un </span>
        <span className='mpanzeu'>....MPANZEU</span>
        <div className='cimpanzeu-7' />
        <button className='chi-button' id='1' onClick={() => handleButtonClick1('1')} style={{ background: activeButton1 == '1' ? 'yellow' : '#5c9149' }}>
            <span className='chi'>CHI</span>
        </button>
        <button className='frame-888' id='2' onClick={() => handleButtonClick1('2')} style={{ background: activeButton1 == '2' ? 'yellow' : '#5c9149' }}>
            <span className='ci-text'>CI</span>
        </button>
        <button className='frame-9' id='3' onClick={() => handleButtonClick1('3')} style={{ background: activeButton1 == '3' ? 'yellow' : '#5c9149' }}>
          <span className='ce-text'>CE</span>
        </button>
        <button className='frame-a' id='4' onClick={() => handleButtonClick1('4')} style={{ background: activeButton1 == '4' ? 'yellow' : '#5c9149' }}>
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
      <div className='flex-row-bottom'>
        <button className='frame-button-chimp' id='5'onClick={() => handleButtonClick2('5')} style={{ background: activeButton2 == '5'  ? 'yellow' : '#5c9149' }}>
            <span className='number'>97</span>
        </button>
        <button className='frame-button-chimp' id='6'onClick={() => handleButtonClick2('6')} style={{ background: activeButton2 == '6'  ? 'yellow' : '#5c9149' }}>
          <span className='span-98'>98</span>
        </button>
        <button className='frame-button-chimp' id='7'onClick={() => handleButtonClick2('7')} style={{ background: activeButton2 == '7'  ? 'yellow' : '#5c9149' }}>
          <span className='span-999'>99</span>
        </button>
        <button className='frame-button-chimp' id='8'onClick={() => handleButtonClick2('8')} style={{ background: activeButton2 == '8'  ? 'yellow' : '#5c9149' }}>
          <span className='span-100'>100</span>
        </button>
        <button className='frame-button-raspunde' onClick={switchPopUp}>
          <span className='text-raspunde'>Raspunde</span>
        </button>
      </div>
    
      {isWrongPopupOpen && (
          <div className="wrong">
            <button className='close-button' onClick={switchPopUp}>X</button>
            <p>Raspuns gresit!</p>
            <p2> Incearca din nou </p2>
          </div>
      )}

      {isCorrectPopupOpen && (
        <div className="correct-popup">
          <button className='close-button' onClick={switchPopUp}>X</button>
          <p>Raspuns corect! </p>
          <Link to='/final'> <button className='button-continua'> Continua </button> </Link>
        </div>
      )}

      <div className='fundal-cimpanzeu' />
    </div>
  );
}
