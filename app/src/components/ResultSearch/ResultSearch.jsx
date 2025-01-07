import React from "react";
import './ResultSearch.css';
import { Link } from "react-router-dom";

const ResultSearch = () => {
    return (
        <>
            <div className="px-9 py-5">
                <div className="result-search-main">
                    <div className="title">Resultados de: falabella</div>
                    <ul>
                        <li><Link to="/company">Banco Falabella</Link></li>
                        <li><a href="">Falabella.com</a></li>
                        <li><a href="">Viajes Falabella</a></li>
                        <li><a href="">Seguros Falabella</a></li>
                        <li><a href="">Tiendas Falabella</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ResultSearch;