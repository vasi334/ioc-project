import React, {useState} from 'react';
import './cincila.css';
import {Link} from "react-router-dom";

export default function Main() {

  const [activeButton1, setActiveButton1] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);

  const [isCorrectPopupOpen, setCorrectPopupOpen] = useState(false);
  const [isWrongPopupOpen, setWrongPopupOpen] = useState(false);

  const switchPopUp = () => {
    if(activeButton1 === '3' && activeButton2 === '8'){
      setCorrectPopupOpen(!isCorrectPopupOpen); 
      const button1 = document.getElementById('3');
      const button2 = document.getElementById('8');
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
        <button className='gi-button-cincila' id='1' onClick={() => handleButtonClick1('1')} style={{ background: activeButton1 == '1' ? 'yellow' : '#eaffae' }}>
          <span className='gi-cincila'>GI</span>
        </button>
        <button className='ghi-button-cincila' id='2' onClick={() => handleButtonClick1('2')} style={{ background: activeButton1 == '2' ? 'yellow' : '#eaffae' }}>
          <span className='span-ghi-cincila'>GHI</span>
        </button>
        <button className='frame-ci-cincila' id='3' onClick={() => handleButtonClick1('3')} style={{ background: activeButton1 == '3' ? 'yellow' : '#eaffae' }}>
          <span className='span-ci-cincila'>CI</span>
        </button>
        <button className='frame-button-ce-cincila' id='4' onClick={() => handleButtonClick1('4')} style={{ background: activeButton1 == '4' ? 'yellow' : '#eaffae' }}>
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
        <button className='frame-19-cincilla' id='5' onClick={() => handleButtonClick2('5')} style={{ background: activeButton2 == '5'  ? 'yellow' : '#eaffae' }}>
          <span className='empty-19-cincila'>19</span>
        </button>
        <button className='frame-19-cincilla' id='6' onClick={() => handleButtonClick2('6')} style={{ background: activeButton2 == '6'  ? 'yellow' : '#eaffae' }}>
          <span className='empty-19-cincila'>18</span>
        </button>
        <button className='frame-19-cincilla' id='7' onClick={() => handleButtonClick2('7')} style={{ background: activeButton2 == '7'  ? 'yellow' : '#eaffae' }}>
          <span className='empty-17-cincila'>17</span>
        </button>
        <button className='frame-19-cincilla' id='8' onClick={() => handleButtonClick2('8')} style={{ background: activeButton2 == '8'  ? 'yellow' : '#eaffae' }}>
          <span className='empty-8-cincila'>20</span>
        </button>
        <button className='frame-button-raspunde-cincila' onClick={() => switchPopUp()}>
          <span className='text-raspunde-cincila'>Raspunde</span>
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
          <Link to='/arici'> <button className='button-continua'> Continua </button> </Link>
        </div>
      )}
      <div className='fundal-cincila' />
    </div>
  );
}
