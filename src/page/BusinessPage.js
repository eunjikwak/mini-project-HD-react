import React from "react";
import HomeFooter from "../components/footer/HomeFooter";
import Header from "../components/header/Header";
import BizMenubar from "../components/business/BizMenubar";
import BizProfile from "../components/business/BizProfile";
import RatingView from "../components/business/RatingView";
import BizSection from "../components/business/BizSection";
import styled from "styled-components";
import { useState } from "react";
import { useCallback } from "react";


const BizBlock = styled.div`
//전체폰트
font-family: "NanumGothic";
//배경색상
background-color:#EEE4DC;
//페이지제목
.pageTitle{
        margin-top: 30px;
        text-align: center;
        font-size: 50px;
        font-weight: 800;
    }
`;
const MenuBlock =styled.div`
 width: 70%;
    margin: 0 auto;
    background-color:#F0B7A2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
`;

const BusinessPage = () => {
    const [category,setCategory] = useState(null);
    const onSelect = useCallback(category => setCategory(category),[]);
   
   
    return(
    <BizBlock>
    <Header>사업자 페이지</Header>
    <div className="pageTitle"> BUSINESS PAGE </div>
    <BizProfile/>
    <MenuBlock>
    <BizMenubar category={category} onSelect={onSelect}/>
    <RatingView/>
    </MenuBlock>
    {category!==null &&
    <BizSection category={category}/>}
    <HomeFooter/>
    </BizBlock>
    );
}

export default BusinessPage;