import { useNavigate } from "react-router-dom";

function Projects() {

    const navigate = useNavigate();

    return (
      <div className='front-body'>
            
        <div className="main-content">
            <button className="back-button" onClick={()=>{navigate(-1)}}>Go back</button>
            <h1 className="title">Projects</h1>

            <p>
                Page in progress.
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ivansilsch"> Github</a>
            </p>

        </div>

        <footer> <small>&copy; Copyright 2022, Ivan Silva</small> </footer> 
        </div>
    );
}

export default Projects;