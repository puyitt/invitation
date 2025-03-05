import React, { useEffect } from 'react'
import img2 from '../../assets/images/image2.jpg'
import test1 from '../../assets/images/test1.jpg'
import test2 from '../../assets/images/test2.png'
import test3 from '../../assets/images/invitation.png'

import './index.scss'
import { useState } from "react";

function Hero() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isActive, setIsActive] = useState(false); // Wrapper starts hidden
  const [isHidden, setIsHidden] = useState(false); // Tracks when wrapper should hide

  useEffect(() => {
    // Add 'active' class after 3 seconds
    const activateTimer = setTimeout(() => {
      setIsActive(true);
      
      // After 2 more seconds, hide the wrapper and show the cover
      setTimeout(() => {
        setIsHidden(true);
      }, 1000);
    }, 500);

    return () => clearTimeout(activateTimer); // Cleanup on unmount
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    // Play sound effect
    const sound = new Audio(process.env.PUBLIC_URL + "/turn.mp3");
    sound.play();
  };

  return (
    <div className='main'>
      <div className={`wrapper ${isActive ? "active" : ""} ${isHidden ? "hide" : ""}`}>

      <div className="lid one"></div>
      <div className="lid two"></div>
      <div className="envelope"></div>
      <div className="letter">
        <p className='hello'>Thet Paing Soe<br />&<br />Win Lai Yee Mon</p>
      </div>
      </div>
      <div className={`cover ${isHidden ? "show" : ""}`}>
        <div className="book">
          <label htmlFor="page-1" className="book__page book__page--1">
            <img src={img2} />
          </label>

          <label htmlFor="page-2" className="book__page book__page--4">
            <img src={test2} />
          </label>

          <input type="radio" name="page" id="page-1" onChange={handleChange}/>

          <input type="radio" name="page" id="page-2" onChange={handleChange}/>
          <label className="book__page book__page--2">
            <div className="book__page-front">
            <img src={test3} />
            </div>
            <div className="book__page-back">
                <img src={test1} />
            </div>
          </label>
        </div>
      </div>
      {/* <div className='hero'>
        <div className="icon">
          <img src={img2} />
        </div>
        <div className='invitationText'>
          <p className='geeding'>You are cordially invited to the wedding of</p>
          <div className="name">
            <p className="name">Thet Paing Soe</p>
            <p className="name">&</p>
            <p className="name">Win Lai Yee Mon</p>
          </div>
          <div className="date">
            <p className="date1">May</p>
            <div className='flexDate'>
              <p className="date2">Mon</p>
              <p className="date3">1</p>
              <p className="date4">AT <span className='num'>09</span> AM</p>
            </div>
            <p className="date5 num">2025</p>
          </div>
          <p className='place'>Nan Htike Thu Hotel, Magway.</p>
        </div>
      </div> */}
    </div>
  )
}

export default Hero