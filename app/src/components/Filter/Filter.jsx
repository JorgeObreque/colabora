import React,{useEffect,useState} from "react";
import './Filter.css';

const Filter = ({children,styles}) => {

    console.log("children",children)
    const defaultStyles = {
        fontFamily: "'gobCL'",
        fontWeight: 300,
        boxShadow: "0 0 0 0.2px #2073F3, 3px 3px 0px rgba(32, 115, 243, 0.4)",
        borderRadius: "25px",
        color: "#1D1D59",
        margin: 0,
        whiteSpace: "nowrap",
        ...styles,
      };
    return(
        <>
            <div style={defaultStyles} className="filter-main d-inline p-0 m-0">
                {children}
            </div>
        </>
        
        
    );
}


export default Filter;