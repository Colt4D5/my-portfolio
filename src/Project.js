const Project = () => {
  return (
    <article className="project">
      <div className="project_img">
        <div className="faux_img">
          <p>image</p>
        </div>
      </div>
      <div className="project_details">
        <h1>bankist app</h1>
        <p><strong>technologies:</strong> html, css, javascript (vanilla)</p>
        <p><strong>challenges:</strong> this was one of the final projects in jonas schmedtmann's javascript course, and the largest in scale, and presented me with many challenges along the way that i, as a new developer, had not experienced yet.</p>
        <p><strong>what i learned:</strong> this project was the point at which i finally understood that javascript is not just for aesthetics, but rather mostly for data management and manipulation. after this project, i had a new image of javascript and have progessed in a whole new way ever since.</p>
      </div>
    </article>
  );
}

export default Project;