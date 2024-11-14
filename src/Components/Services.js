import React from 'react'

// import services data
import {services} from '../data'

function Services() {
  return (
    <section id='services' className='section bg-secondary'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-Skills relative before:absolute before:opacity-40 before:-top-[1rem] before:-left-40 before:hidden before:lg:block'>
                    My Skills
                </h2>
                <p className='subtitle pt-1 text-xl'>
                
                </p>
            </div>
            {/*item gird */}
                <div className="grid lg:grid-cols-4 gap-8">
                    {services.map((service, index)=>{
                        const {icon, name, description} = service;
                        return <div className='bg-tertiary p-6 rounded-2xl' key={index}>
                                    {/* icons */}
                                    <div className="text-accent rounded-sm w-12 h-1 flex justify-center items-start mb-24 text-[28px]">
                                            {icon}
                                    </div>
                                    <h4 className='text-2xl font-medium mb-2'>{name}</h4>
                                    <p className='text-lg'>{description}</p>
                                 </div>
                    })}
                </div>
        </div>
    </section>
  )
}

export default Services