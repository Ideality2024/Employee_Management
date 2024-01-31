import React from 'react'
import { useSelector } from 'react-redux'
import Admin from '../pages/Admin.jpg'
import '../pages/Home.css';

function AdminProfile() {
    const adminData=useSelector(state=>state.auth.userData);
    console.log(adminData);

  return (
    <div>
    <div class="container">
        <div class="profile-header">
        <h1>Admin</h1>
            <img src={Admin} alt="Admin pic"/>
            
        </div>
        <div class="profile-details">
            <h2>Information </h2>
            <ul className=' card container rounded'>
                <li>Name :-  {adminData.name}</li>
                <li>ID :-   {adminData.$id}</li>
                <li>Email :- {adminData.email}</li>
                <li>Phone :-  {adminData.phone.length<1 ? +911234567890 : adminData.phone}</li>
                <li>Update Date :-  {adminData.$updatedAt}</li>
                <li>Registration Date :-  {adminData.registration}</li>
            </ul>
        </div>
        <div className='mt-3 mb-3'>
         <button type="button" className="flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Add Employee</button>
            <button type="button" className="flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Remove Employee</button>
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