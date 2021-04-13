import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skill = ({ comfort, lang, url, index }) => {
  const skill = lang.toLowerCase();
  
  useEffect( () => {
    Aos.init({ 
      duration: 600,
    })
    Aos.refresh();
  }, [])

  return (
    <div data-aos="fade-up-left" data-aos-delay={150 * index} data-aos-once="true" className="skill_container">
      <h2>{skill}</h2>
      <div className={"skill skill_" + skill}>
        <img src={url} alt="language icon"/>
      </div>
      <div className="container__progress">
        <h5>comfort level</h5>
        <div className="progress__outer">
          <div className="progress__inner" style={{width: `${comfort}%`}}>
            <div className="reflection"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;