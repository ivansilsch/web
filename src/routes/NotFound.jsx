import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    return (
      <div className='front-body'>
            
        <div className="main-content">
            <button className="back-button" onClick={()=>{navigate(-1)}}>Go back</button>
            <h1 className="title">Not Found</h1>
        </div>

        <footer> <small>&copy; Copyright 2022, Ivan Silva</small> </footer> 
        </div>
    );
}

export default NotFound;