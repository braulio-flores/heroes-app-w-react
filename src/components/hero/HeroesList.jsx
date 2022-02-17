import React from 'react'
import { useMemo } from 'react';
import { getHeroesByPublisher } from "../../helpers/getHeroes";
import HeroCard from './HeroCard';


const HeroesList = ({ publisher }) => {

    
    const heroesByPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn mb-10'>
            {
                heroesByPublisher.map(heroe=>{
                    return <HeroCard key={heroe.id} { ...heroe }/>
                })
            }
    </div>
  )
}

export default HeroesList