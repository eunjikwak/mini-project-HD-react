import React, { useCallback, useState } from "react";
import HomeHeader from "../components/header/HomeHeader";
import HomeFooter from "../components/footer/HomeFooter";
import MenuBar from "../components/Mypage/MenuBar";
import MyProfile from "../components/Mypage/MyProfile";
import Section from "../components/Mypage/Section";
import styled from "styled-components";
const MypageBlock = styled.div`
    background-color:#D9D9D9;
    h1{
        text-align: center;
    }
    .section {
        display: flex;
        flex-direction: row;
        margin : 20px auto;
        justify-content: center;
    }
    
`;
const Mypage= () => {
      const userId = window.localStorage.getItem("userId");
      const [category,setCategory] = useState('nomal');
      const onSelect = useCallback(category => setCategory(category),[]);
	return (
		<MypageBlock>
           <HomeHeader/>
           <h1> 마 이 페 이 지 </h1>

           <MyProfile/>
           <div className="section">
           <MenuBar category={category} onSelect={onSelect}/>
           <Section category={category} id={userId}/>
           </div>
     
          
           
           <HomeFooter/>
        
        </MypageBlock>
    );
}


export default Mypage;