import Skill from "./Skill"

const Technologies = () => {
  return (
    <section id="technologies" className="section technologies_container">
      <div className="inner tech_inner">
        <h1 className="section_heading">technologies</h1>
        <div className="skills">
          <Skill comfort="95" lang="HTML" url="https://img.icons8.com/color/250/000000/html-5.png" index="0" />
          <Skill comfort="70" lang="CSS" url="https://img.icons8.com/color/250/000000/css3.png" index="1" />
          <Skill comfort="85" lang="JavaScript" url="https://img.icons8.com/color/240/000000/html-5--v2.png" index="2" />
          <Skill comfort="50" lang="React" url="https://img.icons8.com/color/250/000000/react-native.png" index="3" />
          <Skill comfort="70" lang="TypeScript" url="https://img.icons8.com/color/250/000000/typescript.png" index="4" />
          <Skill comfort="90" lang="jQuery" url="https://img.icons8.com/ios-filled/250/000000/jquery.png" index="5" />
          <Skill comfort="95" lang="Sass" url="https://img.icons8.com/color/250/000000/sass.png" index="6" />
          <Skill comfort="20" lang="Bootstrap" url="https://img.icons8.com/color/256/000000/bootstrap.png" index="7" />
          <Skill comfort="10" lang="NodeJS" url="https://img.icons8.com/color/240/000000/nodejs.png" index="8" />
        </div>
      </div>
    </section>
  );
}

export default Technologies;