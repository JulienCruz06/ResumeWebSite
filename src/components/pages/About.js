import React, {useState} from 'react'
import '../../App.css'
import MeSection from '../MeSection'
import Schooling from '../Schooling'
import { Modal } from '../PurdueModal';




function About() {
    return(
        <div>
            <MeSection />
            <Schooling />
        </div>
    )

}

export default About;