import React from 'react'
import employees from "../layout/data"
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Home() {
    return (
        <div className='flex flex-col justify-start'>
            <h1 className='text-4xl w-[100%] container'>Our Employees</h1>
            <div className='flex p-9 gap-4 flex-wrap'>
                {employees.map((employee) => (
                    <div key={employee.age + employee.name} className='rounded-lg border-2 gap-2 max-w-max flex border-black hover:shadow-xl hover:shadow-orange-400 transition-all ease-in-out hover:scale-[1.02]'>

                        <div className='img bg-orange-400 p-3 '>
                            <img src={`${employee.imgSrc}`} className='w-[150px] rounded-full'></img>

                        </div>

                        <div className='details pr-2 select-none'>
                            <div className='mt-3'>
                                <p className='text-gray-400'>Name :</p>
                                <p>{employee.name}</p>
                            </div>
                            <div className='my-3'>
                                <p className='text-gray-400'>Job role :</p>
                                <p>{employee.position}</p>
                            </div>
                            <div>
                                <p className='text-gray-400 inline'>Age : </p>
                                <p className='inline'>{employee.age}</p>
                            </div>
                            <div className='socials flex justify-center items-center gap-6 my-3'>
                            <FaGithub   className='text-2xl hover-orange'/>
                            <FaLinkedin className='text-2xl hover-orange'/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home