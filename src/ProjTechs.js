import React from 'react'

function ProjTechs({ project }) {
  return (
    <div className="icon_container">
      <h3>technologies:</h3>
      {project.techs.map((tech, i) => <img src={tech} alt={tech} key={i} />)}
    </div>
  )
}

export default ProjTechs
