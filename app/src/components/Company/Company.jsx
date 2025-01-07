import React from "react";
import './Company.css';
import { BsChevronLeft } from "react-icons/bs";

const Company = () =>{
    return(
        <div className="px-9 company-main">
            <div className="header">
                <h3>Banco Falabella</h3>
                <p>Mercado Fianciero</p>
                <p>Sitio web oficial: www.bancofalabella.cl</p>
                <div className="volver"> <BsChevronLeft size={"1em"}/> volver</div>
            </div>
            <div className="body">
                asasas
            </div>
        </div>
    );
}

export default Company;