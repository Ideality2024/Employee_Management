import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import services from '../appwrite/config';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import BarChart from './BarChart';
import { UserData } from './Data';

function EmpProfile() {
    const { id } = useParams();
    const [emp, setEmp] = useState(null);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const [chartData, setChartData] = useState([]);
    const [tableData, setTableData] = useState([23, 12, 34, 23, 12, 34, 23, 12, 34, 23, 12, 34]);

    useEffect(() => {
        setLoader(true);
        services.getEmployee(id).then((res) => {
            setEmp(res);
        }).then(() => {
            const res = fetch('https://e-krishak.in/emp-attendence/get_attendence.php?empid=9845521').then((res) => {
                res.json().then((data) => {
                    setChartData(data.all_attendence);
                    const filtered = chartData.filter((data) => data.emp_id  == emp.id);

                    setTableData(filtered);
                    setLoader(false);
                });
            })
        });
    }, [id]);

    // const userData = {
    //     labels: UserData.map((data) => data.month),
    //     datasets: [
    //         {
    //             label: 'Present',
    //             data: graphData,
    //             backgroundColor: 'green',
    //             borderWidth: 1,
    //             fill: false,
    //             borderColor: 'rgb(75, 192, 192)',
    //             tension: 5,
    //         },
    //     ],
    //     scales: {
    //         x: {
    //             beginAtZero: true,
    //             ticks: {
    //                 callback: function (value, index, values) {
    //                     return value + ' days';
    //                 },
    //             },
    //         },
    //         y: {
    //             beginAtZero: true,
    //             ticks: {
    //                 stepSize: 5,
    //                 max: 30,
    //                 callback: function (value, index, values) {
    //                     return value + ' days';
    //                 },
    //             },
    //         },
    //     },
    //     plugins: {
    //         legend: {
    //             display: true,
    //             position: 'top',
    //         },
    //     },
    // };

    function handleSubmit() {
        services.deleteEmployee(id).then((res) => {
            if (res) {
                services.deleteFile(emp.profileImg).then((res) => {
                    if (res) {
                        setTimeout(() => {
                            navigate('/delete-employee');
                        }, 2000);
                    }
                });
            }
        });
    }

    return (
        <div className='p-3 min-h-max relative'>
            {loader ? (
                <div className='h-[90vh] flex justify-center items-center'>
                    <ClipLoader className='text-orange-500' color='rgb(249 115 22)' />
                </div>
            ) : (
                emp && (
                    <div className='flex flex-col'>
                        <div className='relative p-3 flex flex-col md:w-[50%] justify-center items-center'>
                            <img
                                src={`${emp.profileImg ? services.getFilePreview(emp.profileImg) : "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"}`}
                                width={'200px'}
                                alt='employee profile'
                            />
                            <h1>{emp.name}</h1>
                            <p>{emp.id}</p>
                            <p>{emp.email}</p>
                            <p>{emp.role}</p>
                            <p>{emp.status}</p>
                            <button onClick={handleSubmit} type='submit' className='top-2 right-2 bg-orange-500 absolute p-1 rounded-lg text-white'>
                                Delete
                            </button>
                        </div>

                        <div className='flex justify-center items-center w-[50%]'>
                            {
                                <div className='flex flex-col text-center'>
                                    <h2 class="text-2xl font-bold mb-4">HTML Table</h2>

                                    <table class="w-full border-collapse">
                                        <thead>
                                            <tr class="bg-gray-200">
                                                <th class="border border-gray-300 py-2 px-4">Time In</th>
                                                <th class="border border-gray-300 py-2 px-4">Time Out</th>
                                                <th class="border border-gray-300 py-2 px-4">Status</th>
                                                <th class="border border-gray-300 py-2 px-4">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                tableData.map((data) => {
                                                    return (
                                                        <tr class="bg-gray-100">
                                                            <td class="border border-gray-300 py-2 px-4">{data.time_in?data.time_in:"Null"}</td>
                                                            <td class="border border-gray-300 py-2 px-4">{data.time_out?data.time_out:"Null"}</td>
                                                            <td class="border border-gray-300 py-2 px-4">{data.time_in && data.time_out?"Present":"Absent"}</td>
                                                            <td class="border border-gray-300 py-2 px-4">{data.date}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            }
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default EmpProfile;
