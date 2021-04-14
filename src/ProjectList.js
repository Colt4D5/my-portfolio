import React, { useEffect } from 'react';
import ProjTechs from "./ProjTechs"
import Aos from 'aos';
// import 'aos/dist/aos.css';

const ProjectList = ({list}) => {
  
  useEffect( () => {
    Aos.init({ 
      duration: 800
    })
  }, [])

  return (
    <div>
      {list && list.map((proj, i) => (
        <div className="project" key={proj.sys.id} data-aos={`fade-${i % 2 == 0 ? 'left' : 'right'}`} data-aos-once="true" >
          <div className="project_container">
            <div className="project_img">
              <a href={proj.fields.image.fields.url}>
                <img src={proj.fields.image.fields.file.url} alt={`${proj.fields.title} thumbnail`} />
              </a>
            </div>
            <div className="project_details">
              <h1>{proj.fields.title}</h1>
              <p><strong>challenges:</strong> {proj.fields.body.challenges}</p>
              <p><strong>what i learned:</strong> {proj.fields.body.learned}</p>
              <div className="project_links">
                <a href={proj.fields.image.fields.url}>preview</a>
                <a href={proj.fields.image.fields.github}>source code</a>
              </div>
            </div>
          </div>
          <div className="project_techs">
            <ProjTechs project={proj} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;