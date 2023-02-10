import React from "react"
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn"
import Roll from 'react-reveal/Roll';


const Contacts = () => {

    return (
        <div className="mt-40">
            <p className="text-center text-gray-400 mb-2">Do not hesitate to contact</p>
            <h2 className='text-3xl font-bold transparent_text text-center mb-16'>Contact Us</h2>
            <div className="flex justify-center items-center gap-2 flex-col md:flex-row">
                <Roll top>
                    <div className="w-[50%]">
                        <img src="https://shopinplanet.com/wp-content/uploads/2022/05/Orafit-Mega-Smartwatch.jpg" alt="" />
                    </div>
                </Roll>

                <Roll bottom>
                    <div className="space-y-4 w-[50%]">
                        <h2 className='text-3xl font-bold  mb-16'>Let's Talk</h2>
                        <p>We are always waiting to hear from you.</p>

                        <input type="text" placeholder="Your Name" className="input input-bordered  w-full max-w-xs" />
                        <input type="text" placeholder="Subject" className="input input-bordered  w-full max-w-xs " />
                        <input type="text" placeholder="Your Message" className="input input-bordered  w-full max-w-xs h-[100px]" />
                        <PrimaryBtn text={"Submit"} />
                    </div>
                </Roll>
            </div>
        </div>
    )

}


export default Contacts