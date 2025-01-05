import { useMemo } from "react";

const useCustomSelectStyles = () => {
    return useMemo(() => ({
        control: (base, state) => ({
            ...base,
            backgroundColor: "#FFFFFF",
            borderColor: state.isFocused ? "blue" : "#01EFB2",
            boxShadow: state.isFocused ? "0 0 0 2px rgba(0, 123, 255, 0.25)" : null,
            borderRadius: "50px",
            paddingLeft:"15px",
            "&:hover": {
                borderColor: "blue",
            },
            height:"55px",
        }),
        option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
                ? "blue"
                : isFocused
                ? "rgba(0, 123, 255, 0.1)"
                : null,
            color: isSelected ? "white" : "black",
            "&:hover": {
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                
            },
        }),
        multiValue: (base) => ({
            ...base,
            backgroundColor: "#FFFFFF",
        }),
        multiValueLabel: (base) => ({
            ...base,
            color: "#3D3D3D",
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: "white",
            backgroundColor:"#3D3D3D",
            borderRadius:"50%",
            display: "flex",     
            justifyContent: "center",
            alignItems: "center",
            padding:"0",
            marginTop:"5px",
            width: "20px",       
            height: "20px",     
            "&:hover": {
                backgroundColor: "#3D3D3D",
                color: "white",
            },
        }),
        dropdownIndicator: (base) => ({
            ...base,
            display: "none", 
        }),
        indicatorSeparator: (base) => ({
            ...base,
            display: "none", 
        }),
    }), []);
};

export default useCustomSelectStyles;