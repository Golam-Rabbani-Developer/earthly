import React from 'react';
import { SlLocationPin } from 'react-icons/sl'
import { MdBluetoothSearching } from 'react-icons/md'
import { SiPivotaltracker } from 'react-icons/si'
import { MdSmartDisplay } from 'react-icons/md'
import { MdOutlineRecordVoiceOver } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'
import Zoom from 'react-reveal/Zoom';



const featureData = [
    { id: 1, name: 'Display', desc: 'Earthly smartwatches feature a touch screen display for navigation and interaction with the device.' },
    { id: 2, name: 'Connectivity', desc: 'Earthly smartwatches are connected to a smartphone via Bluetooth and can receive notifications, make calls, and send messages.' },
    { id: 3, name: 'Fitness Tracking', desc: "It has sensors and algorithms that can track a user's physical activity and provide insights into their fitness and health." },
    { id: 4, name: 'Voice Assistance:', desc: 'supported virtual assistants like Siri or Google Assistant, which can be activated with a voice command.' },
    { id: 5, name: 'Mobile Payments', desc: 'We included the mobile payment capabilities, allowing users to make payments using their watch.' },
    { id: 6, name: 'GPS', desc: "Included GPS capabilities, allowing them to track a user's location and provide navigation information" },
]

const Features = () => {
    return (
        <div className='mt-40'>
            <p className='text-center text-gray-500 mb-3'>Be Smart With Earthly</p>
            <h2 className='text-3xl font-bold transparent_text text-center'>Earthly Smart Watch Has Some Beautiful Features</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 '>
                {
                    featureData.map((feature, index) =>

                        <Zoom>
                            <div key={feature.id} className="border border-gray-200 space-y-3  flex items-center justify-center flex-col p-6 mt-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 w-96 mx-auto md:w-full">


                                {index === 0 && <span className='border border-gray-400 text-red-700 text-xl p-3 inline-block rounded-full '><MdSmartDisplay /></span>}
                                {index === 1 && <span className='border border-gray-400 text-red-700 text-xl p-3 inline-block rounded-full'><MdBluetoothSearching /></span>}
                                {index === 2 && <span className='border border-gray-400 text-red-700 text-xl p-3 inline-block rounded-full'><SiPivotaltracker /></span>}
                                {index === 3 && <span className='border border-gray-400 text-red-700 text-xl p-3 inline-block rounded-full'><MdOutlineRecordVoiceOver /></span>}
                                {index === 4 && <span className='border border-gray-400 text-red-700 text-xl p-3 inline-block rounded-full'><RiSecurePaymentLine /></span>}
                                {index === 5 && <span className='border border-gray-400 text-red-700 text-xl p-3 inline-block rounded-full'><SlLocationPin /></span>}



                                <h4 className='font-bold'>{feature.name}</h4>
                                <p className='text-gray-500'>{feature.desc}</p>
                            </div>
                        </Zoom>

                    )
                }
            </div>
        </div>
    );
};

export default Features;