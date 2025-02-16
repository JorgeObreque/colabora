import React from "react";
import './Company.css';
import { BsChevronLeft } from "react-icons/bs";
import Filter from "../Filter/Filter";
import FilterGroup from "../FilterGroup/FilterGroup";
import Board from "../Board/Board";
import StarRating from "../StarRating/StarRating";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import LatestAnswers from "../LatestAnswers/LatestAnswers";

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
                <div className="px-5">
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
                        <Board size={'100%'}  >
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
                        <div className="d-flex gap-3">
                            <Board size={'100%'} backgroundColor={'#FFECEC'} className="g-col-6">
                                <div className="title">
                                    Lo más reclamado en <b>mayo</b> fue: 
                                </div>
                                <div className="claims-count py-3 d-flex justify-content-around align-items-center">
                                    <div className="py-3">
                                        <div>
                                            25%
                                        </div>
                                        <div className="info pt-3">
                                            Retardo en la Entrega
                                        </div>
                                    </div>
                                    <div className="py-3"> 
                                        <div>
                                            13%
                                        </div>
                                        <div className="info pt-3">
                                            Publicidad Engañosa
                                        </div>
                                    </div>
                                    <div className="py-3">
                                        <div>
                                            10%
                                        </div>
                                        <div className="info pt-3">
                                            Incumplimiento de contrato
                                        </div>
                                    </div>                                                               
                                </div>
                            </Board> 
                        </div>
                        <LatestAnswers />
                        <FilterGroup align = {"left"}>
                            <Filter>
                                <span>Ver respuestas historicas de Banco Falabella</span>
                            </Filter>
                        </FilterGroup>                    
                    </div>                                        
                </div>
                <div className="case-info py-3 mt-5">
                        Actualmente SERNAC mantiene una acción contra <b>Banco Falabella</b>. Para más información <b>Revisa el caso</b>
                </div>              
            </div>
            <h4>Revisa empresas similares:</h4>
            <div className="d-flex gap-3">
                <Board size={'100%'} backgroundColor={'#FFFFFF'} type={'company'}>
                    <div className="similar-company-title">
                        <b>Scotiabank Chile</b>
                    </div>
                    <div className="similar-company-score"> 
                        5,1
                    </div>
                    <StarRating value={5.1} count={7} type={"company"}></StarRating>
                    <div className="company-info mb-2">
                        de 3561 calificaciones recibidas
                    </div>
                </Board>
                <Board size={'100%'} backgroundColor={'#FFFFFF'} type={'company'}>
                    <div className="similar-company-title">
                        <b>Banco Ripley</b>
                    </div>
                    <div className="similar-company-score"> 
                        3,1
                    </div>
                    <StarRating value={3.1} count={7} type={"company"}></StarRating>
                    <div className="company-info mb-2">
                        de 4454 calificaciones recibidas
                    </div>
                </Board>
                <Board size={'100%'} backgroundColor={'#FFFFFF'} type={'company'}>
                    <div className="similar-company-title">
                        <b>Banco Itaú Chile</b>
                    </div>
                    <div className="similar-company-score"> 
                        6,5
                    </div>
                    <StarRating value={6.5} count={7} type={"company"}></StarRating>
                    <div className="company-info mb-2">
                        de 2454 calificaciones recibidas
                    </div>
                </Board>
            </div> 
            <div className="principles-info py-5">Si quieres conocer los principios y técnicas del análisis de los datos, descarga la <b>Metodología</b></div>
        </div>
    );
}

export default Company;