import React from 'react';
import './Contact.css';
import Admin from './E-Krishak.jpg'

const Contact = () => {

  return (
    <div className="d-flex flex-column ">
      <div>
        <h1 className='h1'>Contact us</h1>
      </div>
      <div className='d-flex w-100 justify-content-end '>
        <div className='w-50  mr-3' >
          <img className='rounded ml-20 mb-5 mt-5 w-75' src={Admin} alt="" />
          
        </div>
        <div className='w-50 mr-3 bg-blue-100 mb-5 rounded card shadow-lg'><form>
          <div className="w-75 ml-5 mb-2 mt-3 ">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Please Enter Your Name'/>
            
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Please Enter your email' />
           
          </div>
          
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" className="btn btn-info bg-blue-100">Send Massage</button>
          </div>
        </form>
        
        </div>
      </div>
    </div>

  );
};

export default Contact;
