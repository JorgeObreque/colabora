import React, { useState } from "react";
import Filter from '../Filter/Filter';

const FilterGroup = ({children, align}) =>{

    const [activeIndex, setActiveIndex] = useState(null);

    const handleFilterClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); 
      };

    const alignmentClass = align === "left" 
        ? "justify-content-start" 
        : align === "right" 
        ? "justify-content-end" 
        : "justify-content-center";
    
    const childrenArray = React.Children.toArray(children);
    
    const renderedFilters = childrenArray.map((child, index) => {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: () => handleFilterClick(index),
        });
    });
    
    return(
        <div className={`d-flex ${alignmentClass} flex-wrap gap-3`}>{renderedFilters}</div>
    );
}

export default FilterGroup;