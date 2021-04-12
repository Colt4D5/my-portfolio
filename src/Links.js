const Links = () => {
  return (
    <div className="links_container">
      <div className="inner">
        <div className="location">
          <h1>location</h1>
          <p>riverside, ca<br/>
          951.756.0273</p>
        </div>
        <div className="resume">
          <button className="resume_box">
            <h1>resume</h1>
            <img src="https://img.icons8.com/material/24/ffffff/download--v1.png" alt=""/>
          </button>
        </div>
        <div className="links">
          <h1>links</h1>
          <div className="icons">
            <a href="www.linkedin.com/in/colton-a-allen"><img alt="linkedin icon" src="https://img.icons8.com/material-rounded/48/ffffff/linkedin--v1.png"/></a>
            <a href="https://github.com/Colt4D5"><img alt="github icon" src="https://img.icons8.com/material-outlined/48/ffffff/github.png"/></a>
            <a href="https://codepen.io/Colt4D5"><img alt="codepen icon" src="https://img.icons8.com/material/48/ffffff/codepen.png"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;