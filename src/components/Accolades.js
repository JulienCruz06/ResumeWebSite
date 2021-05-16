import React from 'react'
import { Button } from './Buttons/PurdueButton'
import './Accolades.css'

function Accolades() {
    return (
       
        <div className="meSect">
            <h1 className='accs'>Accolades</h1>
            <div className='roundImg'>
                    <img className='gradMe' src='img/grad.jpg'></img>
                
                <div className="accContainer">
                    <div className="columnL">
                        <h1>Bethel School of Technology</h1>
                        <ul className='list_texts'>
                            <li>Gradauated February, 2021</li>
                            <li>Gradauated with GPA above 3.0</li>
                            <li>Concentrated studies in Java and ReactJS</li>
                            <li>Retrieved over 1,000 hours of skilled training in code and leadership training</li>
                            <li>Worked with 2 individuals on a application that help users find yard sales nearby their intened location.</li>
                            <li>Voted a Top Coding Bootcamp by Newsweek in America in 2019/2020</li>
                           
                        </ul>
                    </div>
                    <div className="columnR">
                        <h1>Purdue NW University</h1>
                        <ul className='list_texts'>
                            <li>Gradauted Decemeber, 2020</li>
                            <li>Gradauated with GPA above 3.0</li>
                            <li>Concentrated studies in visual communiction and media</li>
                            <li>Curated Media Data which influenced future publications for head Media Studies Professor Dr. Lee Artz at Purdue Northwest.</li>
                            <li>Purdue was voted 5th in  most innovated University in America by U.S. News & World Report</li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Accolades
