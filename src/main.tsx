import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import HeroesApp from "./HeroesApp";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <HeroesApp></HeroesApp>
    </BrowserRouter>
  </React.StrictMode>
)
