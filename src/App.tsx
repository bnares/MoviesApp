import React from 'react';
import './App.css';
import Menu from './Menu';
import IndividualMovie from './movies/IndividualMovies';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';
import Button from './utils/File';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import IndexGenres from './movies/genres/IndexGenres';
import LandingPage from './movies/LandingPage';
import routes from './RouteConfig';
import RedirectToLandingPage from './utils/RedirectToLandingPage';
import configureValidations from './Validation';

configureValidations();
function App() {
  
  return (
   
        <> 
        <Menu />
        <div className="container">
          <Routes>
            {routes.map((route,idx)=>(
              <Route key={route.path} path={route.path} element = {<route.component/>} />
            ))}
            <Route path='/*' element = {<LandingPage />} />
          </Routes>
        </div>
        </>  
  );
}


export default App;
