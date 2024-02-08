import React, { useEffect, useState } from 'react';
import services from '../appwrite/config';
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

function EditEmployee() {

  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState('');
  const [empId, setEmpId] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const userData = useSelector(state => state.auth.userData)

  useEffect(() => {
    async function fetchData() {
      const data = await services.getEmployee(id);
      if (data) {
        setEdit(true);
      }
      setName(data ? data.name : null);
      setEmpId(data ? data.id : null);
      setRole(data ? data.role : null);
      setPhone(data ? data.phone : null);
      setEmail(data ? data.email : null);
      setAddress(data ? data.address : null);
    }
    fetchData();
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    if (edit) {
      services.updateEmployee(data, id, userData);
    } else {
      services.createEmployee(data, userData);
    }
  }
  return (

    <form onSubmit={handleSubmit}>
      <h1 className='text-center mt-10 font-bold hover-orange '>Add Employee/Edit Employee</h1>
      <div className=" container gap-4 mb-4 md:h-96 border md:flex ">
        <div className='relative mt-2 mb-2 md:w-[45%] border-b-2 border-r-2 shadow-md  flex flex-col'>
          <div className='img flex justify-center'>
            <img src='https://th.bing.com/th/id/OIP.L8bs33mJBAUBA01wBfJnjQHaHa?rs=1&pid=ImgDetMain' className='w-44 h-44 border mt-4 rounded-full  ' />
          </div>
          <div className='text-center p-2  mt-4 '>
            <p>ID:{empId}</p>
            <p>Name: {name}</p>
            <p>Role: {role}</p>
          </div>
          <button className='absolute right-2 p-1 px-2 bg-orange-500 text-white rounded-xl h-9 w-15 mt-3 ml-56 '>{edit ? "Update" : "Add"}</button>
        </div>
        <div className='mt-2 px-3 mb-2 md:w-[50%] h-[90%] overflow-y-scroll '>
          <div>
            <label className=' mt-1' htmlFor="name">Name:</label>
            <input required id="name" name="name" type="name" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
          <div>
            <label className='mt-3' htmlFor="id">ID:</label>
            <input required id="id" name="id" type="id" placeholder='Enter ID' value={empId} onChange={(e) => setEmpId(e.target.value)} className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
          <div>
            <label className=' mt-3' htmlFor="role">Role:</label>
            <input required id="role" name="role" type="role" placeholder='Enter Role' value={role} onChange={(e) => setRole(e.target.value)} className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
          <div>
            <label className=' mt-3' htmlFor="status">Status:</label>
            <select required className='mt-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" ' id="status" name="status" >
              <option value="active">Active</option>
              <option value="not_active">Inactive</option>
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
            <label className=' mt-3' htmlFor="birthdate">Date of Birth:</label>
            <input id="birthdate" name="birthdate" type="date" className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
          <div>
            <label className=' mt-3' htmlFor="department">Department:</label>
            <select required className='mt-2   block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"' id="department" name="department" >
              <option value="select one">Select One</option>
              <option value="software">Software Developer</option>
              <option value="hr">HR</option>
            </select>
          </div>
          <div>
            <label className=' mt-3' htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} required id="email" name="email" type="email" className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
          <div>
            <label className=' mt-3' htmlFor="phone">Mobile No:</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} required id="phone" name="phone" type="text" placeholder='Enter Phone Number' className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
          <div>
            <label className=' mt-3' htmlFor="address">Address:</label>
            <input value={address} onChange={(e) => { setAddress(e.target.value) }} required id="address" name="address" type="address" placeholder='Enter Address' className=" mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditEmployee;
