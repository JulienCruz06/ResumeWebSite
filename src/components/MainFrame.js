import React from 'react';
import '../App.css';
import { Button } from './Buttons/Button';
import './MainFrame.css';

function MainFrame() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Julien Cruz Miranda</h1>
      <p>Software Developer</p>
      <div className='hero-btns'>
        <Button buttonStyle='btn--outline'>Lets Connect!</Button>
      </div>
    </div>
  );
}

export default MainFrame;