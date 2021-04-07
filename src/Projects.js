import Project from './Project';

const Projects = () => {
  return (
    <section className="section projects_container" id="projects">
      <div className="inner projects_inner">
        <h1 className="section_heading">projects</h1>
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;