import dbConnect from '@/lib/dbConnect'
import Image from 'next/image'
import React from 'react'

export default async function ServicesSection() {
    const serviceCollection = dbConnect("test-services");
    const data = await serviceCollection.find({}).toArray();
  return (
    <div className='grid grid-cols-12'>
        {data.map((item)=>{
            return(
                <div className='col-span-12 md:col-span-6 lg:col-span-4' key={item._id}>
                    <Image src={item.img} alt='service' width={314} height={208}/>
                </div>
            )
        })}
    </div>
  )
}
