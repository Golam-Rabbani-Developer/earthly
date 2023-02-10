import React from 'react';


// internal import 
import video from '../../assests/watch_video.mp4'
import Products from '../Products/Products';
import './Videos.css'

const Videos = () => {
    return (
        <div className='background-video relative mt-40 md:min-h-[700px] min-h-[1226px]'>
            {/* <video className="video-content" autoPlay loop>
                <source src={video} type="video/mp4" />
            </video> */}
            <div className='w-[95%] mx-auto md:w-[85%] lg:w-[65%] absolute top-0 right-0 md:top-10 bg-none md:left-24 lg:left-52 '>
                <Products video={true} />
            </div>
        </div>
    );
};

export default Videos;