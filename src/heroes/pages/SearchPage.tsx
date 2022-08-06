import React from 'react';
import {HeroCard} from "../components";

export const SearchPage = () => {
    return (
     <>
     <h1>Search</h1>
        <div className="row">
            <div className="col-5">
                <h4>Busquedas</h4>
                <form action = "">
                    <input autoComplete="off"
                           name="searchText"
                           className="form-control"
                           type="text"
                           placeholder="Buscar..."/>
                    <button className="btn btn-outline-primary mt-1">Buscar</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Resultados</h4>
                <hr/>
                <div className = "alert alert-primary">
                    Search a hero
                </div>
                <div className = "alert alert-danger">
                    Hero not found
                </div>
                <HeroCard></HeroCard>
            </div>
        </div>
     </>
    );
};
