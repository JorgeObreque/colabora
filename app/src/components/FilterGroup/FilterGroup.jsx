import React, { useState } from "react";
import Filter from '../Filter/Filter';

const FilterGroup = ({children}) =>{
    const [activeIndex, setActiveIndex] = useState(null);

    const handleFilterClick = (index) => {
        setActiveIndex(index); 
      };
    
    const renderedFilters = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: () => handleFilterClick(index),
            });
        });
    return(
        <div className="d-flex justify-content-center flex-wrap gap-3">{renderedFilters}</div>
    );
}

export default FilterGroup;