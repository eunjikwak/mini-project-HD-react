import React from "react";
import HomeHeader from "../components/header/HomeHeader";
import styled, {css} from "styled-components";
import Main from "../components/home";
import HomeFooter from "../components/footer/HomeFooter";
//import HeaderSection from "../components/header/HeaderSection";
import { Link } from "react-router-dom";


const Body = styled.div`
    background-color: ivory;
    position: relative;

    @media (min-height: 1080px) {
        height: 100vh;
}
    
    
  
`;

const Home = () => {

    return(
        <>
            <Body>
                <HomeHeader/>
                <Main/>   
                <HomeFooter/>
            </Body>
            
        </>
    );
}

export default Home;