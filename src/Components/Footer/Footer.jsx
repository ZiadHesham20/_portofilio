import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import $ from "jquery";

export default function Footer() {
    const [message, setMessage] = useState('')
  return <>
  <div className="row justify-content-center">
        <div className='col-12'>
          <div className='text-center finalcolor'>
            <h2>LET`S STAY IN TOUCH</h2>
          </div>
        </div>
        <div className='col-12 mb-3 d-flex justify-content-center'>
          <input type="text" className='form-control w-50 rounded-end-0' placeholder='Message' onChange={(e)=>{setMessage(e.target.value)}}/>
          <Link to={`mailto:ziadhesham105@gmail.com?subject=${message}`} className=' btn btn-secondary rounded-start-0
        . text-white '>Contact Me</Link>
        </div>
        <div className='col-md-2 d-flex align-items-center justify-content-around'>
          <Link to={'https://www.linkedin.com/in/ziad-hesham-354768237'}><i className="fa-brands icons mx-2 finalcolor mx-lg-0  fa-2x fa-linkedin"></i></Link>
          <Link to={'https://github.com/ZiadHesham20/ZiadHesham20.git'}><i className="fa-brands mx-2 finalcolor mx-lg-0 icons fa-2x fa-github"></i></Link>
          <Link to={'https://www.facebook.com/ziad.hesham.1441'}><i className="fa-brands mx-2 finalcolor mx-lg-0 icons fa-2x fa-facebook"></i></Link>
          
          <Link to={"https://api.whatsapp.com/send/?phone=201126553297&text&type=phone_number&app_absent=0"}><i className="fa-brands mx-2 finalcolor mx-lg-0 icons fa-2x fa-whatsapp"></i></Link>

        </div>
        
      </div>
  </>
}
