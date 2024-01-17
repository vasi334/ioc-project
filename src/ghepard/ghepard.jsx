import React, {useState} from 'react';
import './ghepard.css';
import {Link} from "react-router-dom";

export default function Main() {

  /* PENTRU CELELALTE PAGINI
  
  - copiati functiile si state-urile scrise aici sus
      - > trebuie modificate doar raspunsurile corecte in functia switchPopUp - pe pagina asta erau 3 si 7(vedeti id-ul butoanelor)

  - adaugati la butoanele cu raspunsuri ce am adaugat si eu aici: functia de onClick
  - modificati culorile din functie sa fie corespunzatoare paginilor; cred ca puteti lasa yellow pentru cand butoanele sunt selectate
  - adaugati onClick la butonul de Raspunde si cele doua pop-ups de mai jos
  
  */ 

  const [activeButton1, setActiveButton1] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);

  const [isCorrectPopupOpen, setCorrectPopupOpen] = useState(false);
  const [isWrongPopupOpen, setWrongPopupOpen] = useState(false);

  const switchPopUp = () => {
    if(activeButton1 === '3' && activeButton2 === '7'){
      setCorrectPopupOpen(!isCorrectPopupOpen); 
      const button1 = document.getElementById('3');
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
      <div className='flex-row-ce'>
        <span className='acesta-este-un'>Acesta este un </span>
        <span className='pard'>....PARD</span>
        <div className='ghepard-7' />
        <button className='frame-button-1' id='1' onClick={() => handleButtonClick1('1')} style={{ background: activeButton1 == '1' ? 'yellow' : '#fbe1b1' }}>
          <span className='ge'>GE</span>
        </button>
        <button className='gi-button-1' id='2' onClick={() => handleButtonClick1('2')} style={{ background: activeButton1 == '2'  ? 'yellow' : '#fbe1b1' }}>
          <span className='span-gi'>GI</span>
        </button>
        <button className='frame-button-8' id='3' onClick={() => handleButtonClick1('3')} style={{ background: activeButton1 == '3' ? 'yellow' : '#fbe1b1' }}>
          <span className='span-ghe'>GHE</span>
        </button>
        <button className='frame-button-9' id='4' onClick={() => handleButtonClick1('4')} style={{ background: activeButton1 == '4'  ? 'yellow' : '#fbe1b1' }}>
          <span className='span-che'>CHE</span>
        </button>
        <div className='div-rectangle'>
          <div className='div-el-este'>
            <span className='span-empty'>
              
              <br />
            </span>
            <span className='span-text'>
              El este una dintre felinele mari și cel mai rapid animal terestru.
              <br /> Acesta aleargă cu viteze de până la
            </span>
          </div>
        </div>
        <div className='div-rectangle-a' />
        <span className='span-kmh'>578-463 km/h</span>
      </div>
      <div className='div-flex-row'>
        <button className='frame-button-c' id='5' onClick={() => handleButtonClick2('5')} style={{ background: activeButton2 == '5'  ? 'yellow' : '#fbe1b1' }}>
          <span className='empty-d'>116</span>
        </button>
        <button className='frame-button-c' id='6' onClick={() => handleButtonClick2('6')} style={{ background: activeButton2 == '6'  ? 'yellow' : '#fbe1b1' }}>
          <span className='empty-d'>123</span>
        </button>
        <button className='frame-button-c' id='7' onClick={() => handleButtonClick2('7')} style={{ background: activeButton2 == '7'  ? 'yellow' : '#fbe1b1' }}>
          <span className='empty-f'>115</span>
        </button>
        <button className='frame-button-c' id='8' onClick={() => handleButtonClick2('8')} style={{ background: activeButton2 == '8'  ? 'yellow' : '#fbe1b1' }}>
          <span className='empty-11'>125</span>
        </button>
        <button className='frame-button-raspunde' onClick={() => switchPopUp()}>
          <span className='text-raspunde'>Raspunde</span>
        </button>
      </div>
    
      {isWrongPopupOpen && (
          <div className="wrong">
            <button className='close-button' onClick={switchPopUp}>X</button>
            <p> Raspuns gresit!</p>
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
      

      <div className='fundal-ghepard' />
    </div>
  );
}
