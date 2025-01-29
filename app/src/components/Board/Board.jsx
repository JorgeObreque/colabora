import React from "react";
import './Board.css';


const Board = ({children, size, backgroundColor}) =>{

    const customStyle = {
        width: size,
        backgroundColor:backgroundColor,
      };

    return (
        <div className="board-main mt-3 py-3" style={customStyle}>
            {children}
        </div>
    );
}

export default Board;