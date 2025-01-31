import React from "react";
import './Board.css';


const Board = ({children, size, backgroundColor, type}) =>{

    const customStyle = {
        width: size,
        backgroundColor:backgroundColor,
        border : type === 'company' ? '1px solid #A8C7E1' : 'none',
      };

    const paddingClass = type === 'company' ? '' : 'py-3';
    return (
        <div className={`board-main mt-3 ${paddingClass}`} style={customStyle}>
            {children}
        </div>
    );
}

export default Board;