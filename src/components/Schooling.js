import React, {useState} from 'react'
import './Schooling.css';
import SchoolCard from './cards/SchoolCard';




function Schooling() {
    
    
    
    return (
        <div className='cards'>
          <h1>Here Are The Schools I Graduated From</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <SchoolCard
                    src='img/bethel.jpg'
                    text='Full Stack Development'
                    label='Bethel School of Technology'
                    path='/bethel'
                    button='Bethel Accolades'
                />
                <SchoolCard
                  src='img/purd.png'
                  text='Bachelor in Communication'
                  label='Purdue Northwest Univiersity'
                  path='/purdue'
                  target='_blank'
                  button='Purdue Accolades'
                />
                
              </ul>
              <ul className='cards__items'>
              </ul>

            {/* <ul className='cards__items'>
            <SchoolCard
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Video Project'
              path='/projects'
            />
            <SchoolCard
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Music Project'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Bethel Tech Project'
              path='/sign-up'
            />
          </ul> */}
            </div>
          </div>
        </div>
      );
}

export default Schooling;