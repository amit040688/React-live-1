import React, { useState } from 'react'

   function Contact() {
   const [data, setData] = useState({

    fullname:"",
    number:"",
    email:"",
    massege:"",
   });

   const inputEvent = (event) =>{
    const {name, value } = event.target;

    setData((preVal) => {
     return{
     ...preVal,[name]:value,
     };
    });
   };

const formSubmit = (e) => {
  e.preventDefault()
 alert(`My name is ${data.fullname}, My Number is ${data.number} and email id is ${data.email}, Here what i want to say ${data.massege}`)

};




    return (
       <>
        <div className='container-fluid mb-5'>
            <h1 className='text-center my-5'>Contact Us</h1>
            <div className='row '>
                <div className='col-lg-7  col-sm-12 mx-auto mt-5'>
             <form  onSubmit={formSubmit}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Full Name" 
                        onChange={inputEvent}  
                        name="fullname"
                        value={data.fullname}

                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter Your Number</label>
                        <input type="number" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Phone Number" 
                        onChange={inputEvent}
                        name="number"
                        value={data.number}
                        />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email </label>
                        <input type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="Email" 
                        onChange={inputEvent}
                        name="email"
                        value={data.email}
                        />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Massege</label>
                        <textarea className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3" 
                        placeholder='Massege'
                        onChange={inputEvent}
                        name="massege"
                        value={data.massege}
                        ></textarea>
                    </div>
                    <button type='submit'  className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
       
       </>
    )
}

export default Contact