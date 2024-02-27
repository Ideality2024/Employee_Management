import React from 'react';
import Admin from './E-Krishak.jpg'

const Contact = () => {

  return (
    <div className="flex flex-col px-2">
      <div className='flex justify-center py-4'>
        <h1 className='text-center md:text-left mt-4 md:mt-0 text-4xl'>Contact us</h1>
      </div>
      <div className='md:flex w-[100%] justify-around gap-5'>
        <div className='md:w-[50%]  md:mr-3' >
          <img className='rounded mb-5 md:mt-5 md:w-75 p-3 md:p-0' src={Admin} alt="" />

        </div>
        <div className='md:mx-0 md:w-[50%] mx-2 mr-3 bg-blue-100 mb-5 rounded card shadow-lg'>
          <form className='w-75 ml-5 mb-2 mt-3 flex flex-col gap-3 py-5 text-center items-center '>
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Please Enter Your Name' />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Please Enter your email' />

            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
              <br></br>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="button" className="btn btn-info bg-blue-100">Send Massage</button>
          </form>

        </div>
      </div>
    </div>

  );
};

export default Contact;
