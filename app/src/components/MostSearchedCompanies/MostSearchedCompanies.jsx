import React from "react";
import './MostSearchedCompanies.css';

const MostSearchedCompanies = () => {
    return (
        <div className="px-9 py-5">
            <div className="most-searched-companies-main">
                <p>Empresas más buscadas:</p>
                <ul>
                    <li><a href="">Falabella</a></li>
                    <li><a href="">Banco Santander</a></li>
                    <li><a href="">Latam</a></li>
                    <li><a href="">Construmart</a></li>
                    <li><a href="">Ikea</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MostSearchedCompanies;