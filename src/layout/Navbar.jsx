import React from 'react'
import { FaOpencart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Navbar() {
        return (
                <nav className='bg-blue-100 py-1 text-black font-semibold flex justify-between items-center'>
                        <div className='logo px-4'>
                                <FaOpencart className='text-3xl hover-orange' />
                        </div>

                        <div className='list'>
                                <ul className='flex gap-9'>
                                        <Link to={"/"}><li className='mr-4 hover-orange'>Home</li></Link>
                                        <Link to={"/products"}><li className='mr-4 hover-orange'>Products</li></Link>
                                        <Link to={"/about"}><li className='mr-4 hover-orange'>About</li></Link>
                                        <Link to={"/contact"}><li className='mr-4 hover-orange'>Contact</li></Link>
                                </ul>
                        </div>

                        <div className='btns p-1'>
                                <Link to='/admin'>
                                        <button className='p-1 px-2 bg-orange-500 text-white rounded-xl'>Admin</button>
                                </Link>
                        </div>
                </nav>
        )
}

export default Navbar