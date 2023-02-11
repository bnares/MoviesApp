export interface movieDTO{
    id:number,
    tittle:string,
    poster:string,  //url adddrss of the poster
}

export interface landingPageDTO{
    inTheaters?:movieDTO[],
    upcomingReleases?:movieDTO[],
}

export interface movieCreationDTO{
    title:string,
    inTheaters:boolean,
    trailer:string,
    releaseDate?:Date,
    poster?:File,
    posterURL?:string,
    genresIds?: number[],
    movieTheatersIds?:number[],
    
}