import React from "react";
import { Link } from "react-router-dom";
const heroImg = require.context('../../assets/', true);
// EL TRUE ES PARA QUE NO SOLO BUSQUE EN ESA CAROETA SINO ADEMAS EN SUBDIRECTORIOS

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col animate__animated animate__fadeInRight">
      <div className="card ">
        <div className="row no-gutters">
            <div className="col-4">
                <img src={ heroImg(`./${id}.jpg`) } className='card-img' alt={ superhero } />
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">{ alter_ego }</p>

                    { 
                        (alter_ego !== characters) &&
                            <p className="text-m">{characters}</p>
                    }
                    <p className="card-text">
                        <small className="text-muted">{ first_appearance }</small>
                    </p>

                    <Link to={`/hero/${id}`} >More Info</Link>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
