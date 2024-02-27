import React from 'react'
import { useSelector } from 'react-redux'
import Admin from '../pages/Admin.jpg'
import '../pages/Home.css';
import { Link } from 'react-router-dom';

function AdminProfile() {
  const adminData = useSelector(state => state.auth.userData);
  return (
    <div>
      <div className="container-admin">
        <div className="profile-header flex flex-col justify-center items-center gap-4 md:inline">
          <h1>Admin</h1>
          <img src={Admin} alt="Admin pic" className='' />
        </div>
        <div className="">
          <h2 className='text-xl font-semibold my-2 text-center md:text-left'>Information</h2>
          <ul className='text-lg text-gray-600 my-3'>
            <li>Name :-  {adminData?.name}</li>
            <li>ID :-   {adminData.$id}</li>
            <li className={`font-semibold ${adminData.status ? "text-green-600" : "text-red-500"}`}>Status :-   {adminData.status ? "Active" : "Inactive"}</li>
            <li>Email :- {adminData.email}</li>
            <li className={`${adminData.emailVerification?"text-green-600":"text-red-600"}`}>Email Verified :- {adminData.emailVerification ? "Yes" : "No"}</li>
            <li>Phone :-  {adminData.phone.length < 1 ? "+XXXXXXXXXX" : adminData.phone}</li>
            <li className={`${adminData.phoneVerification?"text-green-600":"text-red-600"}`}>Phone Verified :- {adminData.phoneVerification ? "Yes" : "No"}</li>
            <li>Update Date :-  {adminData.$updatedAt}</li>
            <li>Registration Date :-  {adminData.registration}</li>
          </ul>
        </div>
        <div className='flex gap-2'>
          <Link to={'/add-employee'}><button type="button" className="flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Add Employee</button></Link>
          <Link to={'/delete-employee'}>
            <button type="button" className="flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Remove Employee</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile