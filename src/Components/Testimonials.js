import React from 'react'

// import components
import TestimonialSlider from './TestimonialSlider';

function Testimonials() {
  return (
    <section id='testimonials' className='section bg-tertiary'>
     <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
            <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[1rem] before:-left-60 before:hidden before:lg:block text-3xl'>What People say about me</h2>
            <p className='subtitle text-xl pt-4'>I've been fortunate to have worked with some amazing people, and here's what they have to say about me.</p>
        </div>
        <TestimonialSlider />
     </div>
    </section>
  )
}

export default Testimonials
