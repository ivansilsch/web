import Topics from "./../components/Topics";

function Root() {
    return (
      <div className='front-body'>
        
        <div className="main-content">
            <div className="greet">
                <div className="photo-container">
                <img className="photo" src="photo.jpg" alt="Photo"/>
                </div>
                <h1 className="title">Hello, I'm Ivan.</h1>
            </div>

            <Topics />
        </div>

        <footer> <small>&copy; Copyright 2022, Ivan Silva</small> </footer> 
        </div>
    );
}

export default Root;