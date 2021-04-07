import { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);
  const url = 'http://localhost:8000/';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProjectData(data);
      })
    // const {projects} = await response.json();
    // console.log(projects)
    // setProjectData(projects);
    // setLoading(false);
  }, [])

  return (
    <section className="section projects_container" id="projects">
      <div className="inner projects_inner">
        <h1 className="section_heading">projects</h1>
        {/* {loading || !projectData ? (<div>loading projects...</div>) : 
                                  (projectData.forEach(proj => {
                                    console.log(proj.fields.title)
                                    return (
                                      <Project 
                                        title={proj.fields.title} 
                                        techs={proj.fields.body.technologies}
                                        challenges={proj.fields.body.challenges}
                                        learned={proj.fields.body.learned} />
                                      )
                                    }
                                  ))
                                } */}
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;