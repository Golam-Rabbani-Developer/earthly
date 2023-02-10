
//external import 

import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import Fade from 'react-reveal/Fade';


//internal import 
import './Banner.css';


const Banner = () => {

    return (
        <div className='banner min-h-[600px] z-10'>
            <div className="w-[95%] mx-auto md:w-[85%] lg:w-[60%] flex justify-between items-center pt-32 gap-14 flex-col md:flex-row z-50">
                <Fade left>
                    <div className='order-2 md:order-1 lg:pr-14 w-[50%] hidden md:block'>
                        <h2 className='md:text-4xl text-2xl font-bold mb-7 text-white transparent_text'>The Future of Wearable Technology Has Arrived</h2>
                        <p className='text-gray-400'>Echlone is a wearable computing device that closely resembles a wristwatch or other time-keeping device. In addition to telling time, many smartwatches are Bluetooth-capable.</p>
                        <PrimaryBtn text="Buy Now" />

                    </div>
                </Fade>
                <Fade right>
                    <div className='order-1 md:order-2 w-[50%] text-center'>
                        <h2 className='text-4xl md:hidden  font-bold mb-7 text-white text-center'>The Future of Wearable Technology Has Arrived</h2>



                        <img src='https://i.ibb.co/zxgDs26/smart-2-removebg-preview-1.png' alt='watch-img' />




                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Banner;