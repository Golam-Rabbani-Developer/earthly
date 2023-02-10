import React from 'react';
import PrimaryBtn from '../../Components/PrimaryBtn/PrimaryBtn';

const menuItem = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Store' },
    { id: 3, name: 'Phones' },
    { id: 4, name: 'Air Pods' },
    { id: 5, name: 'Supports' },
]
const company = [
    { id: 1, name: 'About' },
    { id: 2, name: 'Blog' },
    { id: 3, name: 'Press' },
    { id: 4, name: 'Partners' },
]


const legal = [
    { id: 1, name: 'Legal' },
    { id: 2, name: 'Claim' },
    { id: 3, name: 'Privacy' },
    { id: 4, name: 'Terms' },
]

const Footer = () => {
    return (
        <div className='bg-black py-20 md:p-20 mt-40'>
            <div className='text-white flex justify-center items-center flex-col md:flex-row space-y-7'>
                <div className='w-[25%]'>
                    <h4 className='font-bold text-xl text-gray-400'>Quick Links</h4>
                    <ul className='menu'>
                        {
                            menuItem.map(item => <li className='' key={item.id}><a className='menu_item'>{item.name}</a></li>)
                        }
                    </ul>
                </div>
                <div className='w-[25%]'>
                    <h4 className='font-bold text-xl text-gray-400'>Support Policy</h4>
                    <ul className='menu'>
                        {
                            company.map(item => <li className='' key={item.id}><a className='menu_item'>{item.name}</a></li>)
                        }
                    </ul>

                </div>
                <div className='w-[25%]'>
                    <h4 className='font-bold text-xl text-gray-400'>Company Legal</h4>
                    <ul className='menu'>
                        {
                            legal.map(item => <li className='' key={item.id}><a className='menu_item'>{item.name}</a></li>)
                        }
                    </ul>

                </div>
                <div className='md:w-[25%] w-full text-center '>
                    <h4>Subscribe to our newsletter</h4>
                    <p>The latest news, articles, and resources, sent to your
                        inbox weekly.</p>

                    <div className='flex justify-center items-center gap-3'>
                        <input type="text" placeholder="Your Name" className="input input-bordered  w-full max-w-xs mt-4 rounded-[30px]" />
                        <PrimaryBtn text={"Subscribe"} />
                    </div>

                </div>
            </div>
            <hr className='mt-12' />
            <p className='text-sm text-center text-gray-400 p-4 mt-6'>All Rights Reserved By Earthly 2023</p>
        </div>
    );
};

export default Footer;