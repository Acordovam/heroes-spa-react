import React from 'react';
import {Navbar} from "../../ui";
import {Navigate, Route, Routes} from "react-router-dom";
import {DcPage, MarvelPage} from "../pages";
import {SearchPage} from "../pages/SearchPage";
import {HeroPage} from "../pages/HeroPage";

export const HeroesRoutes = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage/>}></Route>
                    <Route path="dc" element={ <DcPage/>}></Route>
                    <Route path="/" element={ <Navigate to="/marvel"></Navigate>}></Route>

                    <Route path="search" element={<SearchPage/>}></Route>
                    <Route path="hero/:id" element={ <HeroPage/>}></Route>
                </Routes>
            </div>
        </div>
    );
};
