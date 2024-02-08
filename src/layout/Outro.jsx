import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import services from '../appwrite/config';

function Outro(props) {

    const adminData = useSelector(state => state.auth.userData)
    const navigate = useNavigate();

    const employee = props.employee;


    return (
        <div key={employee.$id}>
            <div className='rounded-lg border-2 gap-2 md:max-w-max flex md:flex-row flex-col border-black hover:shadow-xl hover:shadow-orange-400 transition-all ease-in-out hover:scale-[1.02]'>


                <div className='img bg-orange-400 p-3 '>
                    <img src={`${employee.profileImg?services.getFilePreview(employee.profileImg):"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"}`} className='w-[150px] rounded-full'></img>

                </div>
                <div>
                    <button onClick={() => {
                        navigate(`/edit-employee/${employee.$id}`)
                    }} className={` border-2 bg-orange-400 px-2 rounded-md text-white hover:scale-[1.1] ${adminData ? "block" : "hidden"}`} type='button'>Edit</button>
                    <button onClick={() => {
                        navigate(`/delete-employee/${employee.$id}`)
                        z
                    }} className={` border-2 bg-orange-400 px-2 rounded-md text-white hover:scale-[1.1] ${adminData ? "block" : "hidden"}`} type='button'>Delete</button>
                </div>

                <div className='details md:pr-2 select-none'>
                    <div className='mt-3'>
                        <p className='text-gray-400'>Name :</p>
                        <p>{employee.name}</p>
                    </div>
                    <div className='my-3'>
                        <p className='text-gray-400'>Job role :</p>
                        <p>{employee.role}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 inline'>Age : </p>
                        <p className='inline'>{employee.birthdate ? employee.birthdate : "Not defined"}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 inline'>id : </p>
                        <p className='inline'>{employee.$id}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 inline'>Address : </p>
                        <p className='inline'>{employee.address}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 inline'>Mobile : </p>
                        <p className='inline'>{employee.phone}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 inline'>Email : </p>
                        <p className='inline'>{employee.email}</p>
                    </div>
                    <div>
                        <p className='text-gray-400 inline'>Status : </p>
                        <p className='inline'>{employee.status ? "Active" : "Inactive"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Outro