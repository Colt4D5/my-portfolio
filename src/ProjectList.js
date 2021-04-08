const ProjectList = ({list}) => {
  return (
    <div>
      {list.map(proj => (
        <article className="project" key={proj.sys.id}>
          <div className="project_img">
            <a href={proj.fields.image.fields.url}>
              <img src={proj.fields.image.fields.file.url} alt="project thumbnail"/>
            </a>
          </div>
          <div className="project_details">
            <h1>{proj.fields.title}</h1>
            <p><strong>technologies:</strong> {proj.fields.body.technologies}</p>
            <p><strong>challenges:</strong> {proj.fields.body.challenges}</p>
            <p><strong>what i learned:</strong> {proj.fields.body.learned}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectList;