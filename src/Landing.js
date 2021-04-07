import React from 'react';
import { Link } from 'react-scroll';

const Landing = () => {
  return (
    <div className="landing" style={{ backgroundImage: 'url(./assets/dev-bg-07.jpg)', backgroundSize: 'cover' }}>
      <div className="inner landing_inner">
        <h1>colton allen</h1>
        <h5>entrepreneur | editor | web developer</h5>
        <nav className="links">
          <Link to="projects" spy={true} smooth={true} duration={1000}>projects</Link>
          <Link to="about" spy={true} smooth={true} duration={1000}>about</Link>
          <Link to="technologies" spy={true} smooth={true} duration={1000}>technologies</Link>
          <Link to="contact" spy={true} smooth={true} duration={1000}>contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default Landing;