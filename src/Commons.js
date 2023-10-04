import React from 'react'
import { NavLink } from 'react-router-dom'


function Common(props) {
  return (
    <>
    <div className='container-fluid'>
        <div className='row '>
            <div className='col-lg-11 col-sm-12  mx-auto'>
                <div className='row common-div align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='left col-sm-mt-5'>
                            <h1 className='mb-3'>{props.title}</h1>
                            <p className='mb-4'>{props.detail}</p>
                            <NavLink to={props.visit} className="btn btn-success">{props.btname} </NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm 12'>
                        <div className='right-img '>
                            <img src={props.imgsrc} alt="img" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Common