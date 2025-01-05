import './Search.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useState } from 'react';
import useCustomSelectStyles from '../../hooks/useCustomSelectStyles';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Search = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isDisabled, setIsDisabled]           = useState(false);
    const animatedComponents                    = makeAnimated();
    const customStyles                          = useCustomSelectStyles();
    const [inputValue, setInputValue]           = useState("");
    const [menuIsOpen, setMenuIsOpen]           = useState(false);
    const navigate                              = useNavigate();

    // Opciones disponibles
    const options = [
        { value: "Falabella", label: "Falabella" },
        { value: "BancoSantander", label: "Banco Santander" },
        { value: "Latam", label: "Latam" },
        { value: "Construmart", label: "Construmart" },
        { value: "Ikea", label: "Ikea" },
    ];

    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };

    const handleInputChange = (value) => {
        setInputValue(value);

        if (value.trim().length > 0) {
            setMenuIsOpen(true);
        } else {
            setMenuIsOpen(false);
        }
    };

    const handleClick = () =>{
        navigate("/results"); 
    }
    return(
        <div className='search-main'>  
            
            <p className='px-9'>¿Quieres conocer como se portan las empresas? Revisa la plataforma:</p>
            <div className='search-background px-9 py-4'>
                <h1>Mi Poder de Decisión</h1>
                <p>Yo elijo a quién comprar y qué contratar</p>
                <div className="position-relative">
                    <Select
                            options={options}
                            isMulti
                            value={selectedOptions}
                            onChange={handleChange}
                            placeholder="Escribe el nombre de una empresa que quieras conocer"
                            isSearchable={true}
                            components={animatedComponents}
                            styles={customStyles}
                            isDisabled={isDisabled}
                            inputValue={inputValue} 
                            onInputChange={handleInputChange} 
                            menuIsOpen={menuIsOpen} 
                    />
                    <Button 
                    variant="primary" 
                    className="position-absolute top-50 end-0 translate-middle-y search-button"
                    onClick={handleClick}
                    >
                        <FaSearch className="mx-2" size="1.5em"/>
                        Buscar
                    </Button>
                </div>
                {console.log(JSON.stringify(selectedOptions, null, 2))}
            </div>
            
        </div>
    );
}

export default Search;