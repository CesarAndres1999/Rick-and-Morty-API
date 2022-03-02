// creacion del personaje con su constructor y sus propiedades 
export class Personaje {

    id: number = 0;
    name: string = "";
    status: String = "";
    species: string = "";
    type: string = "";
    gender: string = "";
    image: string;
    url: string;
    created: string;
    constructor(id: number, name: string, status: String, species: string, type: string, gender: string, image: string, url: string, created: string) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.species = species;
        this.type = type;
        this.gender = gender;
    }

}
//redirecciona por la composicion del Json
export class InfoPersonaje {

    results: Personaje[];

}