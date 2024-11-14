import React from 'react'

//import skill images
import {skills} from '../data'
function Skills() {
  return (
    <section className='bg-secondary py-12'>
        <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
            <h2 className='section-title mb-14'>Tech Stack</h2>
        </div>
            <div className='grid grid-cols-5 md:grid-flow-row'>
                {
                skills.map((skill, index)=>{
                  return (
                    <div className="flex items-center justify-center m-3 md:m-2" key={index}>
                      <img src={skill.image} alt="skill" className='w-16 h-16 my-8' />
                    </div>
                  )})
                }
            </div>
        </div>
    </section>
  )
}

export default Skills