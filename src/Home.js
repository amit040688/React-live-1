import React from 'react'
import web from '../src/images/img-3.png';
import Common from './Commons';

function Home() {
  return (
    <>
           <Common 
           title='Welcome To Our Business Page'
           detail='We Are Provides CRM Solution ,Grow Your Busines With Us '
           btname='Get Started'
           visit="/about"
           imgsrc={web}

           
           />
        </>
  )
}

export default Home;