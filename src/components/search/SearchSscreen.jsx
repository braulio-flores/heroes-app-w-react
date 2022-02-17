import React from "react";
import { useMemo } from "react";
import { getHeroesByName } from "../../helpers/getHeroes";
import { useForm } from "../../hooks/useForm";
import HeroCard from "../hero/HeroCard";

const SearchScreen = () => {

  
  const { valuesForm ,handleInputChange, reset } = useForm({heroS:''});

  let filterHeros = useMemo(() => getHeroesByName(valuesForm.heroS), [valuesForm.heroS]);
 

  const handleSearch = (e) =>{
    e.preventDefault();
    reset();
  }

  const handleChange = (e) =>{
    handleInputChange(e);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Serch Form</h4>
          <hr />
          <form onSubmit={ handleSearch }>
            <input
              type="text"
              name="heroS"
              placeholder="Search Heroe"
              className="form-control"
              autoComplete="off"
              value={valuesForm.heroS}
              onChange={ handleChange }
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-3 col-12"
            >
              Clear
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
            {
              (filterHeros.length===0) && <div className="alert alert-danger  animate__animated animate__fadeInRight">Don´t heros</div>
            }
            {
              filterHeros.map((hero)=>{
                return <HeroCard  key={hero?.id} {...hero} />
              })
            }
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
