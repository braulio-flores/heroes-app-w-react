import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../helpers/getHeroes";
import React, { useMemo } from "react";
const heroImg = require.context('../../assets/', true);

const HeroScreen = () => {
  const navigate = useNavigate();


  let { heroId } = useParams();
  const heroById = useMemo(() => getHeroesById(heroId)[0], [heroId]);

  if (!heroById) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    heroById;
  // const imgPath = `/assets/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="row mt-5  ">
      <div className="col-4">
        <img
          // src={imgPath}
          src={ heroImg(`./${id}.jpg`) }
          alt={superhero}
          className="img-thumbnail animate__animated animate__bounceInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
