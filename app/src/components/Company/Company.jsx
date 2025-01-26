import React from "react";
import './Company.css';
import { BsChevronLeft } from "react-icons/bs";
import Filter from "../Filter/Filter";
import FilterGroup from "../FilterGroup/FilterGroup";
import Board from "../Board/Board";
import StarRating from "../StarRating/StarRating";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

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
                    <Board size={'100%'}>
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
                    <div className="d-flex gap-3">
                        <Board size={'100%'} className="g-col-6">
                            <div className="title">
                                Reclamos de <b>mayo</b>
                            </div>
                            <div className="claims-count py-3 d-flex justify-content-center align-items-center">
                                <div>
                                    7.045
                                </div>
                                <div>
                                    <AiOutlineDislike size={'1em'} color={'red'} />
                                </div>                                
                            </div>
                            <div className="info">
                                <b>Empeoró</b> respecto a abril
                            </div>
                        </Board> 
                        <Board size={'100%'} className="g-col-6">
                            <div className="title">
                                Porcentaje de reclamos respondidos
                            </div>
                            <div className="claims-count py-3 d-flex justify-content-center align-items-center">
                                <div>99%</div>    
                                <div>
                                    <AiOutlineLike size={'1em'} color={'green'} />
                                </div>                             
                            </div>
                            <div className="info">
                                <b>Mejoró</b> respecto a abril
                            </div>
                        </Board> 
                    </div>
                    <div className="d-flex gap-3">
                        <Board size={'100%'} className="g-col-6">
                            <div className="title">
                                Reclamos con soluciones propuestas
                            </div>
                            <div className="claims-count py-3 d-flex justify-content-center align-items-center">
                                <div>
                                    59%
                                </div>
                                <div>
                                    <AiOutlineDislike size={'1em'} color={'red'} />
                                </div>                                
                            </div>
                            <div className="info">
                                <b>Empeoró</b> respecto a abril
                            </div>
                        </Board> 
                        <Board size={'100%'} className="g-col-6">
                            <div className="title">
                                Promedio de días que demoró en responder
                            </div>
                            <div className="claims-count py-3 d-flex justify-content-center align-items-center">
                                <div className="py-3">4 días</div>                                
                            </div>
                            <div className="info">
                                <b>Se mantiene</b> igual a abril
                            </div>
                        </Board> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;