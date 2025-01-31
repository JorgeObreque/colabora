import React from "react";
import { useEffect, useState } from "react";
import "./Answer.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from 'prop-types';
import Lights from "../Lights/Lights";
import AnswerContent from "../AnswerContent/AnswerContent";

const Answer = ({solved}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const customStyle = {
        backgroundColor: isOpen ? '#BFFFC8':'#E9FFFA', 
        borderRadius: isOpen ? '25px 0 0px 0':'25px 0 25px 0',
        boxShadow: isOpen ? 'none': '0 0 0 0.2px #2073F3, 5px 5px 0px rgba(32, 115, 243, 0.4)'
    }

    const HandleClick = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <div className="answer-main py-3"  onClick={HandleClick}> 
            <div className="header" style={customStyle}>
                <div className="d-flex justify-content-between mb-2">
                    <div>Tipo de reclamo : <b>Retardo en la entrega</b></div>
                    <div><b>5 días</b> hábiles de respuesta</div>
                </div>
                <div className="d-flex justify-content-between" >
                    {isOpen ? <IoIosArrowUp size={"1.5em"} /> : <IoIosArrowDown size={"1.5em"} />}
                    <div className="d-flex gap-3">
                        <div>La empresa solucionó mi problema</div>
                        <Lights status={2}/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <>
                    <div className="body px-4">
                        <AnswerContent></AnswerContent>
                    </div>
                    <div className="footer px-4 d-flex align-items-center">
                        <IoIosArrowUp size={"1.5em"} />
                    </div>
                </>
            )}     
        </div>
    );
}

Answer.propTypes = {
    solved: PropTypes.oneOf([
      'resolved', 
      'not_resolved', 
      'in_progress', 
      'partially_resolved'
    ]).isRequired,
  };
  

export default Answer;