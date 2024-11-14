import React from 'react'
import pdf from ".././assets/img/Robert.pdf"

//import image
import Image from '../assets/img/robert1.jpg';

function About() {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10 xl:flex-row'>
         <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left'>
          <div className='flex flex-col'>
            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
              Robert Martin
            </h2>
            <p className='mb-4 text-accent'>
              Full-Stack .NET Developer
            </p>
            <hr className='opacity-5' />
            <p className='mb-8 text-xl'>
              Senior Full Stack .NET Developer with 9+ years of experience in designing and implementing
              high-performance, scalable applications. Expert in C#, .NET Core, ASP.NET, and Entity
              Framework, with a strong track record in leading the development of enterprise-grade solutions
              across healthcare, e-commerce, and retail. Skilled in microservices architecture, cloud
              technologies (Azure, AWS), and both RESTful and GraphQL APIs. Adept at collaborating with
              cross-functional teams to drive successful, high-quality project outcomes.
              </p>
          </div>
          <button className='transition-all btn btn-md bg-accent hover:bg-secondary-hover rounded-xl'>
            <a href={pdf}>My Resume</a>
          </button>
          </div>
          <img
            className='object-cover h-[360px] w-[586px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt='profile'
          />
        </div>
      </div>
    </section>
  )
}

export default About
