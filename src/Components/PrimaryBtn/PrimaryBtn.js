import React from 'react';



//internal import 
import './PraimaryBtn.css';


const PrimaryBtn = ({ text }) => {
    return (
        <div className='primary_btn'>
            <span className='text'>{text}</span>
        </div>
    );
};

export default PrimaryBtn;