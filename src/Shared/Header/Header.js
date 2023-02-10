//external import 
import React, { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { BiSearchAlt2 } from 'react-icons/bi';

// internal imnports 
import './Header.css'

const menuItem = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Store' },
    { id: 3, name: 'Phones' },
    { id: 4, name: 'Air Pods' },
    { id: 5, name: 'Supports' },
]
const Header = () => {


    return (
        <div className="z-50 bg-none w-[100%] min-w-full overflow-hidden shadow-md absolute top-0">
            <div className="navbar w-[95%] mx-auto md:w-[85%] lg:w-[65%]">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-white z-[10000]">
                            {
                                menuItem.map(item => <li key={item.id}><a className='menu_item'>{item.name}</a></li>)
                            }

                        </ul>

                    </div>
                    <a className="text-2xl font-bold italic"><span className='text-red-600'>Ear</span><span className='text-blue-700'>thly</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItem.map(item => <li key={item.id}><a className='menu_item text-sm  text-white'>{item.name}</a></li>)
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='inline-block text-white cursor-pointer text-xl'><BiSearchAlt2 /></span>
                    <span className='inline-block ml-4 cursor-pointer text-xl text-white'><IoCartOutline /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;

