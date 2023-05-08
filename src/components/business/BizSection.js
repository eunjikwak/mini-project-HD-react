import React from "react";
import styled from "styled-components";
import RestInsert from "./RestInsert";
import RestInquiry from "./RestInquiry";
import ResvList from "./ResvList";
import RestMenuInsert from "./RestMenuInsert";
const SectionBlock = styled.div`
    margin : 0 auto;
    background-color:#FBF4EF;
    border-radius: 5px;
    border : 3px solid #F0B7A2;
    border-style :double;
    width : 70%;
    height: 300px;
    margin-top :20px;
    .titleName {
        color : #FF7F50;
        font-size: 40px;
        font-weight: 900;
        text-align: center;
        margin: 20px;
    }

`;

const menuSelect = (name) => {
    switch(name){
        case "menu1" : 
        return <RestInsert/>;
       
        case "menu2" : 
        return <RestInquiry/>;
       
        case "menu3" : 
        return <ResvList/>;
    
        case "menu4" : 
        return <RestMenuInsert/>;
        
        default:
           return null;
    }
}

const BizSection = ({category}) => {

    return(
            <SectionBlock>
           {menuSelect(category)}
            </SectionBlock>
      
    );
}

export default BizSection;