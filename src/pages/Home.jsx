import React, { useEffect, useState } from 'react'
// import employees from "../layout/data"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import services from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const adminData = useSelector(state => state.auth.userData)
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1300)
        async function fetchData() {
            const data = await services.getEmployees();
            setEmployees(data.documents);
            setLoader(false);
        }
        fetchData();
    }, [])


    return (
        <div>
            {
                loader ? (
                    <div className='h-[90vh] flex justify-center items-center'>
                        <ClipLoader className='text-orange-500' color='rgb(249 115 22)' />
                    </div>
                ) : (
                    <div>
                        <div className='flex flex-col justify-start'>
                            <h1 className={`md:text-4xl text-xl md:w-[100%] container ${employees < 1 ? "hidden" : "block"}`}>Our Employees</h1>
                            <div className='flex md:p-9 p-2 md:gap-4 gap-2 flex-wrap'>
                                {employees.length < 1 ?
                                    <div className='md:text-5xl md:w-[100vw] flex justify-center items-center h-[60vh]'>
                                        No Data Found
                                    </div>
                                    : employees.map((employee) => (
                                        <div key={employee.$id} className='rounded-lg border-2 gap-2 md:max-w-max flex md:flex-row flex-col border-black hover:shadow-xl hover:shadow-orange-400 transition-all ease-in-out hover:scale-[1.02]'>


                                            <div className='img bg-orange-400 p-3 '>
                                                <img src={`${employee.imgSrc}`} className='w-[150px] rounded-full'></img>

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
                                    ))}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Home
