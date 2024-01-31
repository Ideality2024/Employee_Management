import React from 'react'
import { useSelector } from 'react-redux'

function AdminProfile() {
    const adminData=useSelector(state=>state.auth.userData);
    console.log(adminData);

  return (
    <div className='border-2 border-black'>
        <h1>Admin Profile</h1>

        <div className='flex flex-col'>
            <p>{adminData.name}</p>
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