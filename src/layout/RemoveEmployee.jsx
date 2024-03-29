import React, { useEffect, useState } from 'react'
import services from '../appwrite/config'
import { FaUserLock } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function RemoveEmployee() {
    const [employees, setEmployees] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        services.getEmployees().then((res) => {
            setEmployees(res.documents);
            setLoader(false);
        });
    }, []);

    useEffect(() => {
        if (searchInput.length === 0) {
            return setSearchResult(null);
        } else {
            const results = employees.filter((emp) =>
                emp.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setSearchResult(results);
        }
    }, [searchInput, employees]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Perform any additional actions if needed
    };

    return (
        <div>

            {loader ? (
                <div className='h-[90vh] flex justify-center items-center'>
                    <ClipLoader className='text-orange-500' color='rgb(249 115 22)' />
                </div>
            ) : (
                <>
                    <h1 className='text-center mt-10 font-bold hover-orange '>Remove Employee</h1>
                    <form >
                        <div className='container border md:h-72 w-[70%] mb-4 md:flex md:gap-40 bg-[#DBEAFE] '>
                            <div className="left flex justify-center">
                                <img src="https://media.istockphoto.com/id/1051177190/photo/glasses-guy-in-studio.jpg?s=612x612&w=0&k=20&c=sGiHWMiwWkdGCXd6OFqw-peiaJNPRXhqBeom_LzbAGM=" className=' ml-15 w-60  h-60  mt-4' /> </div>
                            <div className="md:w-[48%] mt-2 md:mb-2">

                                <div>
                                    <div className=' '>
                                        <label className='md:mt-28 md:ml-2 ' htmlFor="name">Name:</label>
                                        <input value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} id="ID" name="id" type="id" placeholder='Enter ID' className=" md:ml-2 mt-1  md:w-[60%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />

                                        <button onClick={handleSearch} className='px-2 bg-orange-500 text-white rounded-xl h-7 md:ml-2'>
                                            Search
                                        </button>
                                    </div>
                                    <div className={`md:px-10 mt-4 ${searchResult && searchResult.length > 0 ? "scale-[1.1]" : "scale-100"} transition-all ease-in-out`}>
                                        {searchResult && searchResult.length > 0 ? (
                                            searchResult.map((emp) => {
                                                return (
                                                    <Link className='hover:text-orange-500' key={emp.$id} to={`/delete-employee/${emp.$id}`}>
                                                        <div className='p-1 m-1 bg-orange-200 border-2 border-orange-200 flex justify-between items-center' >
                                                            <FaUserLock />
                                                            <p className='ml-2'>{emp.name}</p>
                                                            <p className='ml-2'>{emp.id}</p>
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        ) : (
                                            <div className='text-center'>
                                                <p className='text-red-500 ml-2'>Employee not found</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form></>
            )}
        </div>
    )
}

export default RemoveEmployee
