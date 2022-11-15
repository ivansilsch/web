import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 


function ProjectsList() {

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
    .then(response => response.json())
    .then(data => {
      setProjects(data);
    });
  }, []);

  return (
  	<div>
		<div className="projects">
		{
		  projects?.map((project, index) => {
        	return <a key={index} className="project" href={project.url}>
        		<div className="project-title">{project.title}</div>
        		<div className="project-description">{project.description}</div>
    		</a>
		  })
		}
		</div> 
    </div>

  );

}


export default ProjectsList;