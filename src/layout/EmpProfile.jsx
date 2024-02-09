import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import services from '../appwrite/config';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

function EmpProfile() {
    const { id } = useParams();
    const [emp, setEmp] = useState(null);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        services.getEmployee(id).then((res) => {
            setEmp(res);
            setLoader(false);
        });
    }, [])

    function handleSubmit() {
        const result = services.deleteEmployee(id).then((res) => {
            if (result) {
                services.deleteFile(emp.profileImg).then((res) => {
                    if (res) {
                        setTimeout(() => {
                            navigate('/delete-employee');
                        }, 2000)
                    }
                })
            }
            return
        })
    }

    return (
        <div className='p-3 min-h-max'>
            {
                loader ? (
                    <div className='h-[90vh] flex justify-center items-center'>
                        <ClipLoader className='text-orange-500' color='rgb(249 115 22)' />
                    </div>
                ) : (
                    emp && (
                        <div className='p-3 flex flex-col md:w-[50%] justify-center items-center border-4 border-black'>
                            <img src={`${emp.profileImg ? services.getFilePreview(emp.profileImg) : "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"}`} alt='employee profile' />
                            <h1>{emp.name}</h1>
                            <p>{emp.id}</p>
                            <p>{emp.email}</p>
                            <p>{emp.role}</p>
                            <p>{emp.status}</p>
                            <button onClick={handleSubmit} type='submit' className='bg-orange-500 p-1 rounded-lg text-white'>delete</button>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default EmpProfile