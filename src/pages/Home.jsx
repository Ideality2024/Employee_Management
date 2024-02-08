import React, { useEffect, useState } from 'react'
// import employees from "../layout/data"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import services from '../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import Outro from '../layout/Outro'

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
                                    <div key={1} className='md:text-5xl md:w-[100vw] flex justify-center items-center h-[60vh]'>
                                        No Data Found
                                    </div>
                                    : employees.map((employee) => (
                                        <Outro employee={employee}/>
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
