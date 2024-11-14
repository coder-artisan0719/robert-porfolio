import React from 'react'
import { Link } from 'react-router-dom';

function SingleProject({item}) {
  return (
   <Link to={item.url}  key={item.id} className='flex flex-col items-center text-center' target="_blank" rel="noopener noreferrer">
  <div className='relative mb-8 overflow-hidden rounded-2xl'>
    <img className='transition-transform duration-300 transform rounded-2xl hover:scale-110' src={item.image} alt="project"/>
  </div>
  <p className='mb-3 text-sm capitalize text-accent'>{item.category}</p>
  <h3 className='mb-3 text-2xl font-semibold capitalize'>{item.name}</h3>
</Link>

  )
}

export default SingleProject
