import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <>
<div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>

  <div className='card service_card mb-4'>
  <img src={props.imgs} className=' service_card_img img-fluid' alt={props.imgs} />
  <div className='card-content'>
  <h1 className="card-title">{props.title}</h1>
   <p className="card-detail">{props.par}</p>
   <NavLink to="/" className="card-btn btn btn-primary">{props.but} </NavLink>
 </div>
 </div>
</div>
 </>

    )
}

export default Card