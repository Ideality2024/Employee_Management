import React from 'react'
import { useSelector } from 'react-redux'
import Admin from '../pages/Admin.jpg'
import '../pages/Home.css';
import { Link } from 'react-router-dom';

function AdminProfile() {
  const adminData = useSelector(state => state.auth.userData);
  console.log(adminData);
  return (
    <div>
      <div class="container-admin">
        <div class="profile-header">
          <h1>Admin</h1>
          <img src={Admin} alt="Admin pic" />

        </div>
        <div class="">
          <h2 className='text-xl font-semibold my-2'>Information : </h2>
          <ul className='text-lg text-gray-600 my-3'>
            <li>Name :-  {adminData.name}</li>
            <li>ID :-   {adminData.$id}</li>
            <li className={`font-semibold ${adminData.status ? "text-green-600" : "text-red-500"}`}>Status :-   {adminData.status ? "Active" : "Inactive"}</li>
            <li>Email :- {adminData.email}</li>
            <li>Email Verified :- {adminData.emailVerification ? "true" : "false"}</li>
            <li>Phone :-  {adminData.phone.length < 1 ? "+XXXXXXXXXX" : adminData.phone}</li>
            <li>Phone Verified :- {adminData.phoneVerification ? "true" : "false"}</li>
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




/*

$createdAt
: 
"2024-01-30T17:04:40.295+00:00"
$id
: 
"65b92c2817e5142e9a5c"
$updatedAt
: 
"2024-01-30T17:13:57.480+00:00"
accessedAt
: 
"2024-01-30T17:13:57.480+00:00"
email
: 
"amitkushwaha079@outlook.com"
emailVerification
: 
false
labels
: 
[]
name
: 
"admin"
passwordUpdate
: 
"2024-01-30T17:04:40.292+00:00"
phone
: 
""
phoneVerification
: 
false
prefs
: 
{}
registration
: 
"2024-01-30T17:04:40.292+00:00"
status
: 
true

*/