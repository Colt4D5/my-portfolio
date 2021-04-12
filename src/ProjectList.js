import ProjTechs from "./ProjTechs"

const ProjectList = ({list}) => {
  return (
    <div>
      {list.map(proj => (
        <article className="project" key={proj.sys.id}>
          <div className="project_container">
            <div className="project_img">
              <a href={proj.fields.image.fields.url}>
                <img src={proj.fields.image.fields.file.url} alt="project thumbnail"/>
              </a>
            </div>
            <div className="project_details">
              <h1>{proj.fields.title}</h1>
              <p><strong>challenges:</strong> {proj.fields.body.challenges}</p>
              <p><strong>what i learned:</strong> {proj.fields.body.learned}</p>
              <div className="project_links">
                <a href={proj.fields.image.fields.github}>source code</a>
                <a href={proj.fields.image.fields.url}>preview</a>
              </div>
            </div>
          </div>
          <div className="project_techs">
            <ProjTechs project={proj} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectList;