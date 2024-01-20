import React, {useState} from 'react';
import './rechin.css';
import { Link } from 'react-router-dom'

export default function Main() {

  const [activeButton1, setActiveButton1] = useState(null);
  const [activeButton2, setActiveButton2] = useState(null);

  const [isCorrectPopupOpen, setCorrectPopupOpen] = useState(false);
  const [isWrongPopupOpen, setWrongPopupOpen] = useState(false);

  const switchPopUp = () => {
    if(activeButton1 === '4' && activeButton2 === '6'){
      setCorrectPopupOpen(!isCorrectPopupOpen); 
      const button1 = document.getElementById('4');
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
                <button className='ge-button-rechin' id='1' onClick={() => handleButtonClick1('1')} style={{ background: activeButton1 == '1' ? 'yellow' : '#D6EFFB' }}>
                    <span className='ge-text-rechin'>GE</span>
                </button>
                <button className='gi-buton-rechin' id='2' onClick={() => handleButtonClick1('2')} style={{ background: activeButton1 == '2' ? 'yellow' : '#D6EFFB' }}>
                    <span className='gi-span-rechin'>GI</span>
                </button>
                <button className='ghe-button-rechin' id='3' onClick={() => handleButtonClick1('3')} style={{ background: activeButton1 == '3' ? 'yellow' : '#D6EFFB' }}>
                    <span className='ghe-text-rechin'>GHE</span>
                </button>
                <button className='chi-buton-rechin' id='4' onClick={() => handleButtonClick1('4')} style={{ background: activeButton1 == '4' ? 'yellow' : '#D6EFFB' }}>
                    <span className='chi-text-rechin'>CHI</span>
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
                    <span className='multiplication'>34+26 km/h</span>
                </div>
            </div>
            <div className='flex-roww'>
            <button className='frame-buton-1-rechin' id='5' onClick={() => handleButtonClick2('5')} style={{ background: activeButton2 == '5'  ? 'yellow' : '#D6EFFB' }}>
                    <span className='span-60-rechin'>40</span>
                </button>
                <button className='frame-buton-1-rechin' id='6' onClick={() => handleButtonClick2('6')} style={{ background: activeButton2 == '6'  ? 'yellow' : '#D6EFFB' }}>
                    <span className='span-60-rechin'>60</span>
                </button>
                <button className='frame-buton-2-rechin' id='7' onClick={() => handleButtonClick2('7')} style={{ background: activeButton2 == '7'  ? 'yellow' : '#D6EFFB' }}>
                    <span className='span-50-rechin'>50</span>
                </button>
                <button className='frame-buton-3-rechin' id='8' onClick={() => handleButtonClick2('8')} style={{ background: activeButton2 == '8'  ? 'yellow' : '#D6EFFB' }}>
                    <span className='span-55-rechin'>55</span>
                </button>
                <button className='frame-button-raspunde-rechin' onClick={() => switchPopUp()}>
                    <span className='text-raspunde-rechin'>Răspunde</span>
                </button>
            </div>
            {isWrongPopupOpen && (
               <div className="wrong-popup">
                 <button className='close-button' onClick={switchPopUp}>X</button>
                 <p>Răspuns greșit!</p>
                 <p2> Încearcă din nou. </p2>
                </div>
            )}

            {isCorrectPopupOpen && (
               <div className="correct-popup">
                 <button className='close-button' onClick={switchPopUp}>X</button>
                 <p>Răspuns corect! </p>
                 <Link to='/cincila'> <button className='button-continua'> Continuă </button> </Link>
               </div>
            )}
            <div className='fundal-rechin' />
        </div>
    );
}
