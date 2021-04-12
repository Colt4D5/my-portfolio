import { useEffect, useState } from 'react';
import ProjectList from './ProjectList';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch('http://localhost:8000/projects')
    fetch('projects.json')
      .then(res => {
        if (!res.ok) throw Error('Could not find the projects');
        return res.json();
      })
      .then(data => {
        setLoading(false);
        const { projects } = data;
        setProjectData(projects);
      })
      .catch(err => setError(err))
  }, [])

  return (
    <section className="section projects_container" id="projects">
      <div className="inner projects_inner">
        <h1 className="section_heading">projects</h1>
        {loading && <div>loading projects...</div>}
        {projectData && <ProjectList list={projectData} />}
        {error && <div>{error}</div>}
      </div>
    </section>
  );
}

export default Projects;

// RUN JSON SERVER: npx json-server --watch public/projects.json --port 8000