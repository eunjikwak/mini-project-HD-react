
import MemberInfo from "./MemberInfo";
import MyReview from "./MyReview";
import MyLikeStore from "./MyLikeStore";
import MyInquiry from "./MyInquiry";
import styled from "styled-components";
import MyResv from "./MyResv";

const SectionBlock = styled.div`
    background-color: pink;
    width : 700px;
    height: auto;

`;

const menuSelect = (name,userId) => {
    switch(name){
        case "menu1" : 
        return <MemberInfo id={userId}/>;
       
        case "menu2" : 
        return <MyReview/>;
       
        case "menu3" : 
        return <MyLikeStore/>;
    
        case "menu4" : 
        return <MyInquiry/>;
        
        case "menu5" : 
        return <MyResv/>;
        default:
           return null;
    }
}

const Section= ({category,id}) => {
    return(
        <SectionBlock>
        <h1>세션</h1>
        {menuSelect(category,id)}
        </SectionBlock>
    );
}

export default Section;