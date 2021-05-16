import React from 'react';
import './Projects.css';
import CardItem from './cards/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img/img1.jpg'
              text='Yard Sale Locator'
              label='Bethel Tech Final Project'
              path='/yardSaleLocator'
              
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img/clicker.png'
              text='Clicker & Reducer'
              label='Bethel Tech Project'
              path='/reactCounter'
             
            />
            <CardItem
              src='img/popUp.png'
              text='Pop Up Modal, Embbed Music and More to Come!'
              label='Project'
              path='/projects'
             
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;