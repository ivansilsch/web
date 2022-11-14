import { Link } from "react-router-dom";

function Topics() {
  return (
    <div className="topics">
      <div className="topics-left">
        <div>
          I'm a software engineer student who likes coding and music.
          Welcome to my webpage, here you will find some projects i'm woking on.
        </div>

        <br/> 
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ivansilsch">Github</a>
      </div>
      <div className="topics-right">
        <Link to="/projects" className="topic projects-shape">Projects</Link>
        <Link to="/music" className="topic music-shape">Music</Link>
        <Link to="/more" className="topic misc-shape">More</Link>
      </div>
    </div>
  );
}

export default Topics;