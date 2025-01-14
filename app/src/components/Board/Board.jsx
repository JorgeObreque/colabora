import React from "react";
import './Board.css';

const Board = ({children}) =>{
    return (
        <div className="board-main mt-3 py-3">
            {children}
        </div>
    );
}

export default Board;