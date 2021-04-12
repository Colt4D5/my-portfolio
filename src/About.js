const About = () => {
  return (
    <div id="about" className="section about_container" style={{ backgroundImage: 'url(./assets/double-bubble-outline.png)', backgroundSize: 'auto' }}>
      <div className="inner about_inner">
        <h1 className="section_heading">about</h1>
        <div className="about_content">
          <div className="column column_left">
            <p>i presently make kick-ass cakes as co-owner/operator and head baker of pink city cake studio and make kick-ass books even more kick ass as a freelance editor, but i also make kick-ass websites.</p>
          </div>
          <div className="column column_center">
          <p>in my quest to become a web developer, i have completed several courses and spent countless hours clacking away at my keyboard to build some awesome websites.</p>
          </div>
          <div className="column column_right">
          <p>utilizing the hard work and dedication that i have instilled through my experience in owning and operating a business, i believe i would be a great asset to any team seeking to advance the field of web development.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;