import React, { useState } from 'react';
import Question from './Question';



const questionData = [
    { id: 1, name: 'What is Earthly ?', ans: 'Earthly is an organisation deals with smart world and making some solutions about upcoming technological world' },
    { id: 2, name: 'Can I return any porduct after purchase ?', ans: ' No you can not. Because of some security issue.' },
    { id: 3, name: 'Are all watch is water proof?', ans: 'Yes here every watch is waterproof.' },
    { id: 4, name: 'Why you should buy it from Earthly ?', ans: 'Since Earthly is an organisation deals with smart world and making some solutions about upcoming technological world. We have some happy cutomer and we provide best solution about our product' },
    { id: 5, name: 'Join as a Earthly member?', ans: 'Earthly is an organisation deals with smart world and making some solutions about upcoming technological world' },
]

const Questions = () => {

    return (
        <div className='mt-40'>
            <h2 className='text-3xl font-bold transparent_text text-center mb-16'>Do you have any quesitons?</h2>

            <div>
                {
                    questionData.map(question => <Question question={question} />
                    )
                }
            </div>
        </div>
    );
};

export default Questions;