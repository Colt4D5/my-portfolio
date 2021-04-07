const Skill = ({comfort, lang, url}) => {
  const skill = lang.toLowerCase();

  return (
    <div className="skill_container">
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