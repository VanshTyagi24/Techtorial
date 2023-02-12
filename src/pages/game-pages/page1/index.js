import React, { useState,useEffect } from "react";
import "./page1.css";
import keyboard from "../../../assets/images/Keyboard/keyboard1.png"
import bar from "../../../assets/images/bar/bar1.png"
export const Game = () => {
 
  const [color, setColor] = useState('blue');

  useEffect(() => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let i = 0;

    const intervalId = setInterval(() => {
      setColor(colors[i % colors.length]);
      i++;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleKeyPress = event => {
    
      window.location.href = '/game2';
    
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, []);
  return (
    <div className="container">
      <h1 className="heading">This is your keyboard.</h1>
      <p>It is for typing in information like letters, numbers, symbols, and more.</p>
      <div className="imageContainer">
        <img className="image" src={keyboard} alt="keyboard" />
        
        <img className="rightImage" src={bar} alt="bar" />
        </div>
        <p className="text" style={{ color }}>Press ANY KEY to continue</p>
      
    </div>
  );
};


