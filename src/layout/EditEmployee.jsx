import React from 'react';


function EditEmployee() {
  return (

    <form>
      <h1 className='text-center mt-10 font-bold hover-orange '>Add Employee/Edit Employee</h1>
      <div className=" container gap-4 mb-4 h-96 border flex ">
        <div className='relative mt-2 mb-2 w-[45%] border  flex flex-col'>
          <div className='img flex justify-center'>
            <img src='https://th.bing.com/th/id/OIP.L8bs33mJBAUBA01wBfJnjQHaHa?rs=1&pid=ImgDetMain' className='w-44 h-44 border mt-4 rounded-full  ' />
          </div>
          <div className='text-center mt-4 '>
            <p>ID:123e676gy8679</p>
            <p>Name: Chotu </p>
            <p>Role: Software Developer</p>
          </div>
          <button className='absolute right-2 p-1 px-2 bg-orange-500 text-white rounded-xl h-9 w-15 mt-3 ml-56 '>Add</button>
        </div>
<<<<<<< HEAD
        <div className='mt-2 mb-2 w-[50%]  overflow-y-scroll'>
          <div className="container">
            <div>
=======
        <div className='mt-2 mb-2 w-[50%] h-[90%] overflow-y-scroll '>
          <div>
>>>>>>> f951c931378bc427e5ec0e64f626f0d85a70426c
            <label className=' mt-1' htmlFor="name">Name:</label>
            <input id="name" name="name" type="name" placeholder='Enter Name' className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
            <div>
              <label className='mt-3' htmlFor="id">ID:</label>
              <input id="id" name="id" type="id" placeholder='Enter ID' className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
            </div>
            <div>
              <label className=' mt-3' htmlFor="role">Role:</label>
              <input id="role" name="role" type="role" placeholder='Enter Role' className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
            </div>
            <div>
              <label className=' mt-3' htmlFor="status">Status:</label>
              <select className='mt-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" ' id="status" name="status" >
                <option value="select one">Select One</option>
                <option value="active">Active</option>
                <option value="not_active">Not Active</option>
              </select>
            </div>
            <div>
              <label className=' mt-3' htmlFor="gender">Gender:</label>
              <select className='mt-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"  ' id="gender" name="gender" >
                <option value="select one">Select One</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label className=' mt-3' htmlFor="date of birth">Date of Birth:</label>
              <input id="date" name="date of bith" type="date" className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
            </div>
            <div>
              <label className=' mt-3' htmlFor="department">Department:</label>
              <select className='mt-2   block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"' id="department" name="department" >
                <option value="select one">Select One</option>
                <option value="software">Software Developer</option>
                <option value="hr">HR</option>
              </select>
            </div>
            <div>
              <label className=' mt-3' htmlFor="email">Email:</label>
              <input id="email" name="email" type="email" className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
            </div>
            <div>
              <label className=' mt-3' htmlFor="mobile no">Mobile No:</label>
              <input id="email" name="email" type="number" placeholder='Enter Phone Number' className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
            </div>
            <div>
              <label className=' mt-3' htmlFor="address">Address:</label>
              <input id="address" name="address" type="address" placeholder='Enter Address' className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
            </div>
            <div>
              <label className=' mt-3' htmlFor="imageUrl" >Image URL:</label>
              <input id="image url" name="image url" type="url" placeholder='Enter Image URL' className="  mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>
      </div>
    </form>
  );
}

export default EditEmployee;
