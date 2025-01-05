import React,{useEffect,useState} from "react";
import Search from './Search/Search'
import MostSearchedCompanies from "./MostSearchedCompanies/MostSearchedCompanies";
import ResultSearch from "./ResultSearch/ResultSearch";
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";


const MainComponent = () => {
    const [resultSearchIsVisible,setResultSearchIsVisible] =  useState(false);

    return (        
        <Container fluid="xxl">
            <hr />
            <Search/>
            <Outlet />
            <hr />
        </Container> 
    );
}

export default MainComponent;