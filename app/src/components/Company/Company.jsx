import React from "react";
import './Company.css';
import { BsChevronLeft } from "react-icons/bs";
import Filter from "../Filter/Filter";

const Company = () =>{
    return(
        <div className="px-9 company-main">
            <div className="header">
                <h3>Banco Falabella</h3>
                <p>Mercado Fianciero</p>
                <p>Sitio web oficial: www.bancofalabella.cl</p>
                <div className="volver"> <BsChevronLeft size={"1em"}/> volver</div>
            </div>
            <div className="body text-center">
                <h4 className="my-4">Reclamos Tramitados</h4>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-3 "><Filter/></div>
                        <div className="col-md-3 "><Filter/></div>
                        <div className="col-md-3 "><Filter/></div>
                        <div className="col-md-3 "><Filter/></div>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Company;