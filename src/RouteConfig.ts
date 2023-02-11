import CreateActor from "./movies/actors/CreateActor";
import EditActor from "./movies/actors/EditActor";
import IndexActors from "./movies/actors/IndexActors";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMOvies from "./movies/FilterMovies";
import CreateGenre from "./movies/genres/CreateGenre";
import EditGenre from "./movies/genres/EditGenre";
import IndexGenres from "./movies/genres/IndexGenres";
import LandingPage from "./movies/LandingPage";
import EditTheater from "./movies/movieTheaters/CreateTheater";
import CreateTheater from "./movies/movieTheaters/EditTheater";
import IndexTheaters from "./movies/movieTheaters/IndexTheaters";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {
        path:'/genres',
        component: IndexGenres,
        exact:true,
    },
    {
        path:'/',
        component: LandingPage,
        exact:true,
    },
    {
        path:"/genres/create",
        component: CreateGenre
    },
    {
        path:"/genres/edit/:id",
        component: EditGenre
    },
    {
        path:'/actors',
        component: IndexActors,
        
    },
    {
        path:'/actors/create',
        component: CreateActor,
       
    },
    {
        path:'/actors/edit/:id',
        component: EditActor,
        
    },
    {
        path:'/movieTheaters',
        component: IndexTheaters,
        exact:true,
    },
    {
        path:'/movieTheaters/edit',
        component: EditTheater,
        
    },
    {
        path:'/movieTheaters/create',
        component: CreateTheater,
        
    },
    {
        path:'/movies/create',
        component: CreateMovie,
        
    },
    {
        path:'/movies/edit/:id',
        component: EditMovie,
        
    },
    {
        path:'/movies/filter',
        component: FilterMOvies,
        
    },
    
    
];

export default routes;