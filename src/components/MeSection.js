import React from 'react';
import { Button } from './Buttons/Button';
import './MeSection.css';


const MeSection = () => {
    return (
        <div className="meSection">
            <div className="meContainer">
                <div className="columnLeft">
                    <h1>Hello, My name Is Julien Cruz Miranda!</h1>
                    <p className="firstP">I am a driven web developer who is passionate about curating and updating code to better help with the efficiency of the code. Throughout the pandemic I successfully completed one of the best coding bootcamps in America and obtained a BA at Purdue University I thrive in working under pressure and being self driven.</p>
                    <p className="secondP">I come from a family that defied the odds by my parents succeeding while having twins at a young age of 17. I am the result of a hardworking Hispanic family whose works prepared a way for their future generation. I am an ambitious coder who is eager to help expand the organization with the best of my abilities. I thrive in communities who honor teamwork, communication and each other. </p>
                    <p className='thirdP'>With the inclusion of knowing code, I am Bi-lingual. I speak fluent English and ASL (American Sign Language). My passion is found in communicating my creativity through code!</p>
                    
                </div>
                <div className="columnRight">
                <img className="me" src='img/me.jpeg'/>
                </div>
            </div>
        </div>
    )
}


export default MeSection

