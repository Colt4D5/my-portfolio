const About = () => {
  return (
    <div id="about" className="section about_container" style={{ backgroundImage: 'url(./assets/double-bubble-outline.png)', backgroundSize: 'auto' }}>
      <div className="inner about_inner">
        <h1 className="section_heading">about</h1>
        <div className="about_content">
          <div className="column column_left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus molestiae blanditiis accusamus inventore modi quibusdam possimus dolorem cumque. Velit. Non ducimus molestiae blanditiis accusamus inventore modi quibusdam possimus dolorem cumque. Velit.</p>
          </div>
          <div className="column column_center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus molestiae blanditiis accusamus inventore modi quibusdam possimus dolorem cumque. Velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus molestiae blanditiis accusamus inventore modi quibusdam.</p>
          </div>
          <div className="column column_right">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus molestiae blanditiis accusamus inventore modi quibusdam possimus dolorem cumque. Velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;