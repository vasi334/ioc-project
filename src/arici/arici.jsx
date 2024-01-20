import React, {useState} from 'react';
import './arici.css';
import { Link } from 'react-router-dom'

export default function Main() {

    const [activeButton1, setActiveButton1] = useState(null);
    const [activeButton2, setActiveButton2] = useState(null);
  
    const [isCorrectPopupOpen, setCorrectPopupOpen] = useState(false);
    const [isWrongPopupOpen, setWrongPopupOpen] = useState(false);
  
    const switchPopUp = () => {
      if(activeButton1 === '3' && activeButton2 === '5'){
        setCorrectPopupOpen(!isCorrectPopupOpen); 
        const button1 = document.getElementById('3');
        const button2 = document.getElementById('5');
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
                <button className='gi-buttonn' id='1' onClick={() => handleButtonClick1('1')} style={{ background: activeButton1 == '1' ? 'yellow' : '#fbe1b1' }}>
                    <span className='gi-textt'>GI</span>
                </button>
                <button className='ghi-buton' id='2' onClick={() => handleButtonClick1('2')} style={{ background: activeButton1 == '2' ? 'yellow' : '#fbe1b1' }}>
                    <span className='ghi-span'>GHI</span>
                </button>
                <button className='ci-buttonn' id='3' onClick={() => handleButtonClick1('3')} style={{ background: activeButton1 == '3' ? 'yellow' : '#fbe1b1' }}>
                    <span className='ci-textt'>CI</span>
                </button>
                <button className='ce-button' id='4' onClick={() => handleButtonClick1('4')} style={{ background: activeButton1 == '4' ? 'yellow' : '#fbe1b1' }}>
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
                <button className='frame-buton-22' id='5'  onClick={() => handleButtonClick2('5')} style={{ background: activeButton2 == '5' ? 'yellow' : '#fbe1b1' }}>
                    <span className='span-118'>128</span>
                </button>
                <button className='frame-buton-11' id='6' onClick={() => handleButtonClick2('6')} style={{ background: activeButton2 == '6' ? 'yellow' : '#fbe1b1' }}>
                    <span className='span-138'>138</span>
                </button>
                <button className='frame-buton-22' id='7' onClick={() => handleButtonClick2('7')} style={{ background: activeButton2 == '7' ? 'yellow' : '#fbe1b1' }}>
                    <span className='span-118'>118</span>
                </button>
                <button className='frame-buton-33' id='8' onClick={() => handleButtonClick2('8')} style={{ background: activeButton2 == '8' ? 'yellow' : '#fbe1b1' }}>
                    <span className='span-148'>148</span>
                </button>
                <button className='frame-button-raspunde'>
                    <span className='text-raspunde' onClick={switchPopUp}>Răspunde</span>
                </button>
            </div>

                    
            {isWrongPopupOpen && (
                <div className="wrong">
                    <button className='close-button' onClick={switchPopUp}>X</button>
                    <p>Răspuns greșit!</p>
                    <p2> Încearcă din nou. </p2>
                </div>
            )}

            {isCorrectPopupOpen && (
                <div className="correct-popup">
                <button className='close-button' onClick={switchPopUp}>X</button>
                <p>Răspuns corect! </p>
                <Link to='/cimpanzeu'> <button className='button-continua'> Continuă </button> </Link>
                </div>
            )}
      

            <div className='fundal-arici' />
        </div>
    );
}
