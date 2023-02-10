// external imports 
import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import { FaCheck } from 'react-icons/fa'
import Rotate from 'react-reveal/Rotate';

// internal impports 
import './Products.css'

const Products = ({ video }) => {

    let newColor;
    const [color, setColor] = useState({ white: false, black: false, gray: true })


    const handleColor = (colorvalue) => {

        if (colorvalue === 'black') {
            if (color.black === true) {
                return
            }
            newColor = {
                white: false, black: true, gray: false
            }
        }
        if (colorvalue === 'white') {
            if (color.white === true) {
                return
            }
            newColor = {
                white: true, black: false, gray: false
            }
        }
        if (colorvalue === 'gray') {
            if (color.gray === true) {
                return
            }
            newColor = {
                white: false, black: false, gray: true
            }
        }
        setColor(newColor)
    }

    return (
        <div className='mt-20'>

            <div className='flex flex-col md:flex-row
            '>
                <Rotate top left>
                    <div className={`md:w-[50%] w-[95%] mx-auto  ${video ? "order-2 md:order-1 text-white" : "md:order-2 order-1"} space-y-3 text-center md:text-start`}>
                        <p className='text-gray-500'>About The Watch</p>
                        <h2 className='text-3xl font-bold transparent_text'> {video ? "Best and Fashionable Smart Watch For Easy Life" : "Our Best Product of the Shop"}</h2>
                        <p>A smartwatch is a type of wearable technology that functions as a computer on the wrist. It combines features of a traditional wristwatch with additional functions such as text messaging, fitness tracking, smartphone notifications, and voice commands.</p>

                        <div className='p-4 px-8 md:p-0 space-y-3'>
                            <p className='flex items-start gap-2'> <span><FaCheck className='text-xl text-rose-700' /></span> Health and fitness tracking (heart rate, step count, calories burned, etc.)</p>
                            <p className='flex items-start gap-2'> <span><FaCheck className='text-xl text-rose-700' /></span> Notifications for incoming calls, texts, and social media updates</p>
                            <p className='flex items-start gap-2'> <span><FaCheck className='text-xl text-rose-700' /></span> Mobile payments</p>
                        </div>

                        <div className='space-x-3 flex justify-center md:justify-start my-8'>
                            <p onClick={() => { handleColor('gray') }} className={`rounded-sm w-[60px] h-[60px] flex justify-center items-center min-w-[40px] min-h-[40px]  border-2 cursor-pointer hover:opacity-70 transition-all duration-300 ${color.gray ? "border-red-500" : "border-gray-300 "}`}><img className='w-[40px]' src="https://i.ibb.co/bPGSp8v/smart-hero-2-1-1-removebg-preview.png" alt="" /></p>
                            <p onClick={() => { handleColor('white') }} className={`rounded-sm w-[60px] h-[60px] flex justify-center items-center min-w-[40px] min-h-[40px] border-2 ${color.white ? "border-red-500" : "border-gray-300 "} cursor-pointer hover:opacity-70 transition-all duration-300 `}><img className='w-[40px]' src="https://i.ibb.co/zxgDs26/smart-2-removebg-preview-1.png" alt="" /></p>
                            <p onClick={() => { handleColor('black') }} className={`rounded-sm w-[60px] h-[60px] flex justify-center items-center min-w-[40px] min-h-[40px] border-2 ${color.black ? "border-red-500" : "border-gray-300 "} cursor-pointer hover:opacity-70 transition-all duration-300 `}><img className='w-[40px]' src="https://i.ibb.co/6Js766W/smart-hero-2-1-removebg-preview-1-1.png" alt="" /></p>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>

                            <PrimaryBtn text={"Grab Now"} />
                        </div>


                    </div>
                </Rotate>
                <Rotate top right>
                    <div className={`w-[95%] md:w-[50%] ${video ? "md:order-2 order-1" : "order-2 md:order-1"}   mt-12 md:mt-0`}>


                        {

                            color.black && <InnerImageZoom src='https://i.ibb.co/6Js766W/smart-hero-2-1-removebg-preview-1-1.png' zoomScale={1.6} zoomSrc='https://i.ibb.co/6Js766W/smart-hero-2-1-removebg-preview-1-1.png' zoomType='hover' fullscreenOnMobile='true' hasSpacer='false' />
                        }
                        {

                            color.white && <InnerImageZoom src='https://i.ibb.co/zxgDs26/smart-2-removebg-preview-1.png' zoomScale={1.6} zoomSrc='https://i.ibb.co/zxgDs26/smart-2-removebg-preview-1.png' zoomType='hover' fullscreenOnMobile='true' hasSpacer='false' />
                        }
                        {

                            color.gray && <InnerImageZoom src={`${video ? "https://i.ibb.co/bPGSp8v/smart-hero-2-1-1-removebg-preview.png" : "https://i.ibb.co/sVgttjX/watch-new-1-removebg-preview-1.png"}`} zoomScale={1.6} zoomSrc={`${video ? "https://i.ibb.co/bPGSp8v/smart-hero-2-1-1-removebg-preview.png" : "https://i.ibb.co/sVgttjX/watch-new-1-removebg-preview-1.png"}`} zoomType='hover' fullscreenOnMobile='true' hasSpacer='false' />
                        }

                    </div>
                </Rotate>
            </div>
        </div>
    );
};

export default Products;