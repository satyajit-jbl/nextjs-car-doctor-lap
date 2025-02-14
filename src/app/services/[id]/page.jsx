import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDdetailsPage({ params }) {
    const p = await params;
    const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div>
            <section className='flex justify-center'>
                <figure className=' relative'>
                    <Image
                        src={"/assets/images/checkout/checkout.png"}
                        width={1137}
                        height={300}
                        alt={"banner"}
                    />
                    <div className='transparent-layer overlay-bg absolute top-0 w-full h-full border-2 border-red-400'>
                        <div className='w-full h-full font-bold text-2xl flex items-center ps-16'>
                            <div>
                            <h1 className='text-white'>Services Detials</h1>
                            </div>
                            
                        </div>
                    </div>
                </figure>


            </section>
            <section>
                <Image src={data.img} width={400} height={280} alt={data.title}/>
            </section>
            {/* <p>{JSON.stringify(p)}</p> */}

            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}
