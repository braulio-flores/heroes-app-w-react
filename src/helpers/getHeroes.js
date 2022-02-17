import { heroes } from "../data/heroes-with-desc"

export const getHeroesByPublisher = ( publisher ) => {

    const heroesByPublisher = heroes.filter((heroe)=>heroe.publisher === publisher);
    return heroesByPublisher;
    
}

export const getHeroesById = ( id ) => {


    const heroesById = heroes.filter((heroe)=>heroe.id === id);
    return heroesById;
    
}

export const getHeroesByName = ( name ) => {

    console.log('aaa');

    name = name.toLowerCase();


    const heroesByName = heroes.filter((heroe)=>heroe.superhero.toLowerCase().includes(name));
    if (heroesByName.length>0) {
        return heroesByName;
    } else {
        return [];
    }
    
}

