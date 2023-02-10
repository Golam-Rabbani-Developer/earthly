import React, { useEffect, useState } from 'react';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import InnerImageZoom from 'react-inner-image-zoom';
import Zoom from 'react-reveal/Zoom';

const Allproducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (


        <div className='mt-40 flex justify-center items-center flex-col md:flex-row gap-5'>
            {
                products.map(product =>
                    <Zoom>
                        <div className="card w-96 bg-base-100 shadow-md relative mt-4 rounded-none min-h-[550px]">
                            <figure className="px-10 pt-10">
                                <InnerImageZoom src={product.image} zoomScale={1.6} zoomSrc={product.image} zoomType='hover' fullscreenOnMobile='true' hasSpacer='false' />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.watch_name}</h2>
                                <p className='capitalize'>{product.desc.length > 70 ? `${product.desc.split(0, 100)}...` : product.desc}</p>
                                <div className='flex justify-center items-center gap-3'>
                                    <p className='mt-8'>{product.brand}</p>
                                    <p className='font-bold mt-8 text-gray-500'>{product.price}</p>
                                    <PrimaryBtn text={"Buy Now"} />
                                </div>
                            </div>
                            {
                                product.new ? <div className="badge badge-secondary absolute top-0 right-0 rotate-45">New</div> : ''
                            }
                        </div>
                    </Zoom>
                )
            }
        </div>

    );
};

export default Allproducts;