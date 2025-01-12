import React,{useEffect,useState} from "react";
import './Filter.css';

const Filter = ({children, styles, clickStyles, isActive, onClick}) => {
    
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

    const defaultClickStyles = {
        backgroundColor: "#2073F3",
        color: "#fff",
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
        fontWeight:"700",
        boxShadow:"none",
        ...clickStyles
    };
    

    const [customStyles,setCustomStyles] = useState(defaultStyles);

    useEffect(() => {
        setCustomStyles(isActive ? { ...defaultStyles, ...defaultClickStyles } : defaultStyles);
      }, [isActive, defaultStyles, defaultClickStyles]);

    return(
        <>
            <div 
            style={customStyles} 
            className="filter-main d-inline p-0 m-0"
            onClick={onClick}
            >
                {children}
            </div>
        </>
        
        
    );
}


export default Filter;