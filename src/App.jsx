import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Music from './routes/Music';
import NotFound from './routes/NotFound';
import Projects from './routes/Projects';

function App() {  

  const router = createBrowserRouter([
    { path: "/", element: <Root /> },
    { path: "/projects", element: <Projects />},
    { path: "/music", element: <Music />},
    { path: "*", element: <NotFound />},
  ]);


  return (
    <div className='app-container'>

      <div className='back-body'></div>
      
      <RouterProvider router={router}/>

    </div>
  )
}

export default App
