import React from 'react'

//import components
import Projects from '../Components/Projects'


function Portfolio() {
  return (
   <section id='portfolio' className='section bg-primary min-h-[1400px]'>
    <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
            <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[1rem] before:-left-3/4 before:hidden before:lg:block'>My Latest Work</h2>
            <p className='subtitle text-lg'>
                My projects demonstrate my ability to craft user-friendly and engaging sites that are both visually appealing and functional.
            </p>
            <Projects />
        </div>
    </div>
</section>

  )
}

export default Portfolio
