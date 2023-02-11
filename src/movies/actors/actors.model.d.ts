export interface actorCreationDTO{
    name:string,
    dateOfBirth?:Date,
    picture?: File,
    pictureURl?: string,
    biography?:string
}

export interface actorMovieDTO{
    id:number,
    name:string,
    character: string,
    picture:string
}