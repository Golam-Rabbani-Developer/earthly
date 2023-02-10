import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Question = ({ question }) => {
    const [ans, setAns] = useState(false)
    return (
        <div key={question.id} className='border-b-2 border-gray-400 p-4'>
            <h5 className='flex font-semibold items-center justify-between'>{question.name} <span onClick={() => setAns(!ans)} className='border border-gray-400 p-3 cursor-pointer rounded-full '>{ans ? <AiFillCaretUp /> : <AiFillCaretDown className='text-xl' />}</span></h5>
            <p className={`transition-all duration-500 mt-4 relative ${ans ? 'block' : 'hidden'}`}>{question.ans}</p>
        </div>
    );
};

export default Question;