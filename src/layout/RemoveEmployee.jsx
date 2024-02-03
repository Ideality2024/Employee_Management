import React from 'react'

const RemoveEmployee = () => {
    return (
        <div>

            <h1 className='text-center mt-10 font-bold hover-orange '>Remove Employee</h1>
            <form >
                <div className='container border h-72 w-[70%] mb-4 flex gap-40 bg-[#DBEAFE] '>
                    <div className="left flex justify-center">
                        <img src="https://media.istockphoto.com/id/1051177190/photo/glasses-guy-in-studio.jpg?s=612x612&w=0&k=20&c=sGiHWMiwWkdGCXd6OFqw-peiaJNPRXhqBeom_LzbAGM=" className=' ml-15 w-60  h-60  mt-4' /> </div>
                    <div className="  w-[48%] mt-2 mb-2   ">

                        <div className=' '>
                            <label className='  mt-28 ml-2 ' htmlFor="name">ID:</label>
                            <input id="ID" name="id" type="id" placeholder='Enter ID' className=" ml-2 mt-1  w-[60%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"></input>

                            <button className=' px-2 bg-orange-500 text-white rounded-xl h-7  ml-2   '>Search</button>


                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default RemoveEmployee
