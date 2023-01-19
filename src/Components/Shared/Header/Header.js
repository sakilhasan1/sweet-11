import { error } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className='p-8 bg-orange-500 shadow md:flex md:items-center md:justify-between static mb-8 '>

            <div>
                <span className='text-3xl font-[poppins] cursor-pointer'>
                    <img className='h-16 inline rounded-full' src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=2000" alt="" />
                    Sweet Restaurant
                </span>
            </div>

            <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-orange-500 w-full left-0 md:w-auto md:p-0 py-4 md:pl-0 pl-7  ' >
                <li className='mx-4 my-6 md:my-0  text-xl hover:text-cyan-500 duration-500'><Link to='/'>Home</Link></li>
                <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500'><Link to='/services'>Services</Link></li>
                <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500'><Link to='/blog'>Blog</Link></li>
                <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500'><Link to='/signUp'>Sign Up</Link></li>

                {
                    user?.uid ?
                        <>
                            <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500'><Link to='/addService'>Add-Service</Link></li>
                            <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500'><Link to='/myReviews'>My-Reviews</Link></li>
                            <button onClick={handleLogOut} className='bg-cyan-400 text-white font-[poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>
                                Logout
                            </button>
                        </>
                        :
                        <>

                            <li className='mx-4 my-6 md:my-0 text-xl hover:text-cyan-500 duration-500'><Link to='/logIn'>LogIn</Link></li>
                        </>
                }


            </ul>

        </nav>
    );
};

export default Header;