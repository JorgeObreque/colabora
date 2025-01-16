import React from "react";
import './Company.css';
import { BsChevronLeft } from "react-icons/bs";
import Filter from "../Filter/Filter";
import FilterGroup from "../FilterGroup/FilterGroup";
import Board from "../Board/Board";
import StarRating from "../StarRating/StarRating";

const Company = () =>{
    const styles = {color:"#E51E62",boxShadow: "0 0 0 0.2px #E51E62, 3px 3px 0px rgba(32, 115, 243, 0.4)"};
    const clickStyles = {backgroundColor:"#E35A89"};
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
                <FilterGroup>
                    <Filter>
                    <span>En 2021-2023</span>
                    </Filter>
                    <Filter>
                    <span>En 2024</span>
                    </Filter>
                    <Filter>
                    <span>En mayo</span>
                    </Filter>
                    <Filter styles={styles} clickStyles={clickStyles}>
                    <span>Último Cyber</span>
                    </Filter>
                </FilterGroup>
                <div className="container-xxl">
                    <Board>
                        <div className="title">
                            De <b>1 a 7 la nota promedio</b> que pusieron las personas a la respuesta de la empresa fue:
                        </div>
                        <div className="score">
                            4,4
                        </div>
                        <StarRating value={3.5} count={7}></StarRating>
                        <div className="info">
                            de 4454 calificaciones recibidas
                        </div>
                    </Board>
                </div>
            </div>
        </div>
    );
}

export default Company;