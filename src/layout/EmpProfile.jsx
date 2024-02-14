import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import services from '../appwrite/config';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import BarChart from './BarChart';
import { UserData } from './Data';

function EmpProfile() {
    const { id } = useParams();
    const [emp, setEmp] = useState(null);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    const [chartData, setChartData] = useState([]);

    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        setLoader(true);
        services.getEmployee(id).then((res) => {
            setEmp(res);
            async function FetchAttendence() {
                const data = await fetch("https://e-krishak.in/emp-attendence/get_attendence.php?empid=9845521")
                const response = await data.json();
                setChartData(response);
                const filtered = await response.all_attendence.filter((data) => data.emp_id == emp?.id);
                setChartData(filtered);
                setGraphData(filtered.map((data) => data.atten_id));
                // console.log(graphData)
            }
            FetchAttendence();
            setLoader(false);
        });
    }, [])



    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.month),
        datasets: [
            {
                label: 'Present',
                data: UserData.map((data) => data.userGain),    
                backgroundColor: 'green',
                borderWidth: 1,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 5
            }
        ],
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    callback: function (value, index, values) {
                        // Customize X-axis labels as needed
                        return value + ' days'; // Example customization
                    },
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5, // Adjust as needed
                    max: 30, // Adjust as needed
                    callback: function (value, index, values) {
                        // Customize Y-axis labels as needed
                        return value + ' days'; // Example customization
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    });



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
        <div className='p-3 min-h-max relative'>
            {
                loader ? (
                    <div className='h-[90vh] flex justify-center items-center'>
                        <ClipLoader className='text-orange-500' color='rgb(249 115 22)' />
                    </div>
                ) : (
                    emp && (
                        <div className='flex flex-col'>
                            <div className='relative p-3 flex flex-col md:w-[50%] justify-center items-center'>
                                <img src={`${emp.profileImg ? services.getFilePreview(emp.profileImg) : "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"}`} width={"200px"} alt='employee profile' />
                                <h1>{emp.name}</h1>
                                <p>{emp.id}</p>
                                <p>{emp.email}</p>
                                <p>{emp.role}</p>
                                <p>{emp.status}</p>
                                <button onClick={handleSubmit} type='submit' className='top-2 right-2 bg-orange-500 absolute p-1 rounded-lg text-white'>Delete</button>
                            </div>

                            <div className='flex justify-center items-center w-[50%]'>
                                <BarChart chartData={userData} />
                            </div>
                        </div>


                    )
                )
            }
        </div>
    )
}

export default EmpProfile