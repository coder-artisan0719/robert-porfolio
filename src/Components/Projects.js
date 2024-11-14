import React, {useState, useEffect}from 'react'
//import projects data
import {projectsData} from '../data';
//import projects navigation data
import {projectsNav} from '../data'
//import components
import SingleProject from './SingleProject';

function Projects() {
  // the default setting
  const [item, setItem] = useState({name: 'All'});
  const [projects, setProjects] = useState([]);
  // sets the curosr color depending of the item selected
  const [active, setActive] = useState(0);
  
  useEffect(
    ()=>{
      //get projects based on  item
      if(item.name === "All"){
        setProjects(projectsData);
      }else{
        const newProjects = projectsData.filter((project)=>{
          return project.category === item.name;
        });
        setProjects(newProjects);
      }
    },[item]);

    const handleClick = (e, index)=>{
      setItem({name: e.target.textContent})
      setActive(index);
    };


  return (
     <div>
      {/* projects nav */}
      
      {/* projects grid */}
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 gap-y-8'>
        {projects.map((item)=>{
          return <SingleProject item={item} key={item.id} />;
        })}
      </section>
    </div>
  )
}

export default Projects