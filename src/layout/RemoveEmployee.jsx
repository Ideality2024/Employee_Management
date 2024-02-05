import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import services from '../appwrite/config'
import { FaUserLock } from 'react-icons/fa'

const RemoveEmployee = () => {

    const [employees, setEmployees] = useState([])
    const [name, setName] = useState('');
    const [filteredEmp, filterEmp] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await services.getEmployees();
            setEmployees(data.documents);
        }
        fetchData();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const data = employees.filter((employee) => employee.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
        filterEmp(data[0]);
        console.log(data[0]);
    }

    return (
        <div>

            <h1 className='text-center mt-10 font-bold hover-orange '>Remove Employee</h1>
            <form >
                <div className='container shadow-lg h-72 w-[70%] mb-4 flex gap-40 p-2 border-2'>
                    <div className="left flex justify-center">
                        <img src="https://i.pinimg.com/564x/47/02/5b/47025b05ce9ff7b8e0ba95966ae90236.jpg" className='' /> </div>
                    <div className="  w-[48%] mt-2 mb-2   ">
                        <div className='h-[100%]'>
                            <div className=' flex items-center h-[50%] justify-center'>
                                <label className='mr-1' htmlFor="name">Name: </label>
                                <input value={name} onChange={(e) => setName(e.target.value)} id="ID" name="id" type="id" placeholder='Enter Name....' className=" ml-w-[60%] rounded-md border-0 py-1.5 text-gray-900 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>

                                <button onClick={handleSearch} className='ml-2 p-1 bg-orange-500 text-white rounded-full min-h-max'><CiSearch className=' text-2xl' /></button>
                            </div>
                            <div className='bg-red-300'>
                                {filteredEmp?<p>No Data Found</p>:filteredEmp[0].map((employee) => {
                                    <div key={employee.id} className=''>
                                        <p>{employee.name}</p>
                                        <p>{employee.role}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RemoveEmployee
