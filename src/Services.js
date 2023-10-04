import React from 'react'
import Sdata from './Sdata';
import Card from './Card';

function Services() {
    return (
        <div className='container-fluid'>
            <h1  className='text-center my-5 col-sm-my-3' >Our Services</h1>
            <div className='row '>
                <div className='col-lg-11 col-sm-12  mx-auto'>

              <div className='row'>
              {
                        Sdata.map((val,index) => {
                            return (
                               <Card 
                               key ={index}
                               imgs={val.images}
                               title={val.work}
                               par={val.para}
                               but={val.button}

                               
                    
                               />

                          )
                        })
                    }
              </div>

                </div>
            </div>
        </div>
    )
}

export default Services