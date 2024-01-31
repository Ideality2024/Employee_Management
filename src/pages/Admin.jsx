import React, { useEffect, useState } from 'react';
import { FaOpencart } from 'react-icons/fa'
import auth from '../appwrite/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/authSlice';
import AdminProfile from './AdminProfile';


function Admin() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.userData)

    // Check if admin is logged in or got an time out
    useEffect(() => {
        auth.getCurrentUser().then((res) => {
            if (res || res !== null) {
                setLoggedIn(true)
                dispatch(login(res))
                console.log(userData);
            }
        })
    }, [])


    const handleLogin = () => {
        auth.login(email, password).then((res) => {
            dispatch(login(res))
        })
    };

    return (
        <div>
            {loggedIn ? (

                <>
                <AdminProfile />
                <button className='flex justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600' onClick={() => { auth.logout() }}>Logout</button>
                </>
            ) : (
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className='w-[100%] flex justify-center'>
                            <FaOpencart className='text-3xl hover-orange ' />
                        </div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter the Admin Credentials to Continue</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" value={email} onChange={(e) => { setemail(e.target.value) }} name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-orange-600 hover:text-orange-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <button type="button" onClick={handleLogin} className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Admin