import React from 'react';
import {HeroCard} from "../components";
import {useForm} from "../../hooks/useForm";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {getHeroByName} from "../helpers";

export const SearchPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const {q = ''} = queryString.parse(location.search)
    const {searchText, onInputChange}: any = useForm({
        searchText: q
    });
    // @ts-ignore
    const heroes = getHeroByName(q)
    const onSearchSubmit =(event: any) => {
        event.preventDefault();
        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }

    return (
     <>
     <h1>Search</h1>
        <div className="row">
            <div className="col-5">
                <h4>Búsquedas</h4>
                <form onSubmit = {onSearchSubmit}>
                    <input autoComplete="off"
                           name="searchText"
                           className="form-control"
                           type="text"
                           value={searchText}
                           onChange={onInputChange}
                           placeholder="Buscar..."/>
                    <button className="btn btn-outline-primary mt-1">Buscar</button>
                </form>
            </div>
            <div className="col-7">
                <h4>Resultados</h4>
                <hr/>
                    {
                        (q === '')
                            ? <div className = "alert alert-primary animate__animated animate__fadeIn"> Search a hero  </div>
                            :(heroes.length === 0) && <div className = "alert alert-danger animate__animated animate__fadeIn"> Hero with name <b>{q}</b> not found </div>
                    }
                {
                  heroes.map((hero: any) =>  <HeroCard key = {hero.id} {...hero}></HeroCard> )
                }
            </div>
        </div>
     </>
    );
};
