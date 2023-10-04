import React from 'react'
import web from '../src/images/img-4.png';
import Common from './Commons';

function About() {
  return (
    <>
           <Common 
           title='Welcome To Our About Page'
           detail='We Are From The Industry Of World Class'
           btname='Read More'
           visit="/services"
           imgsrc={web}

           
           />
        </>
  )
}

export default About