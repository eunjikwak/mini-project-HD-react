import React, { useCallback, useState } from "react";
import HomeHeader from "../components/header/HomeHeader";
import HomeFooter from "../components/footer/HomeFooter";
import MenuBar from "../components/Mypage/MenuBar";
import MyProfile from "../components/Mypage/MyProfile";
import Section from "../components/Mypage/Section";
import styled from "styled-components";
const MypageBlock = styled.div`
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
    //메뉴바와 세션 영역 CSS
    .section {
        display: flex;
        flex-direction: row;
        margin : 20px auto;
        justify-content: center;
    }
    
`;
const Mypage= () => {
      const [category,setCategory] = useState('nomal');
      const onSelect = useCallback(category => setCategory(category),[]);
	return (
		<MypageBlock>
           <HomeHeader/>
           <div className="pageTitle"> MY PAGE </div>
           <MyProfile/>
           <div className="section">
           <MenuBar category={category} onSelect={onSelect}/>
           <Section category={category}/>
           </div>
     
       
           <HomeFooter/>
        
        </MypageBlock>
    );
}


export default Mypage;