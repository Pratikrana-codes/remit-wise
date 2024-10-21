import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Navbar = () => {
    const {isLoggedIn} =useAuth(); 
 return (
    <>
        <header >
            <div className="container navbar">
                <div className="logo-brand ">
                    <NavLink to="/">🏛️Remit Wise</NavLink>
                </div>

                <div className='navbars'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {isLoggedIn?  <li>
                            <NavLink to="/logout">Logout</NavLink>
                        </li>:
                        <>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>

                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </header>
    </>
)
}

export default Navbar