import React from "react";
import './Board.css';


const Board = ({children, size}) =>{

    const customStyle = {
        width: size,
      };

    return (
        <div className="board-main mt-3 py-3" style={customStyle}>
            {children}
        </div>
    );
}

export default Board;