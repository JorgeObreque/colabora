import React from "react";
import FilterGroup from "../FilterGroup/FilterGroup";
import Filter from "../Filter/Filter";
import Answer from "../Answer/Answer";

const LatestAnswers = () =>{
    const styles = {color:"#E51E62",boxShadow: "0 0 0 0.2px #E51E62, 3px 3px 0px rgba(32, 115, 243, 0.4)"};
    const clickStyles = {backgroundColor:"#E35A89"};
    return (
        <div className="my-5">
            <h4 className="mb-4">Las últimas 5 respuestas de la empresa</h4>
            <FilterGroup >
                <Filter>
                    <span>Cualquier tipo de Reclamo</span>
                </Filter>
                <Filter>
                    <span>Retardo en la Entrega</span>
                </Filter>
                <Filter>
                    <span>Publicidad Engañosa</span>
                </Filter>
                <Filter>
                    <span>Incumplimiento de Contrato</span>
                </Filter>
                <Filter styles={styles} clickStyles={clickStyles}>
                    <span>Último Cyber</span>
                </Filter>
            </FilterGroup>
            <div className="d-flex flex-column gap-3 mt-4">
                <Answer solved={"resolved"}/>
                {/* <Answer/> */}
            </div>
        </div>
    );

}

export default LatestAnswers;