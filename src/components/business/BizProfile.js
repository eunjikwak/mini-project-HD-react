import React from "react";
import shop from "../../images/shop.png";
import styled from "styled-components";
const ProfileBlock = styled.div`  
width: 70%;
height: auto;
margin: 30px auto;
background-color: #FBF4EF;
border-radius: 20px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 20px;

//프로필 이미지
.profileImg img{
    width: 300px;
    height: 200px;
    
}
//버튼
.confirmBtn{
        margin: 20px;
        font-size: 26px;
        font-weight: bold;
        width: 100px; 
        height: 40px;
        color: white;
        background-color: #FF7F50;
        font-size: 15px;
        border-radius: 18px;
        border:none;
        cursor: pointer;
    }
    .info{
                font-size: 20px;
                margin : 40px;
            & > * {
                margin: 10px;
            }
            }

    .box{
            
            input{
                margin-left: 10px;
                margin-right: 10px;
                width: 400px; 
                height: 50px;
                padding: .5em .1em; 
                font-family: inherit; 
                border: 3px solid #999;
                font-size: 18px;
                border-radius: 10px; 
                background :none;
            }
            .result {
                margin-left: 10px;
                margin-right: 10px;
                width: 250px;
                height: 20px;
                font-size: 18px;
                font-family: inherit;
               
            }
        }



`;
const BizProfile = () => {
   
    return(
            <ProfileBlock>
            <div className="profileImg"><img src={shop} alt="Logo" /></div>
            <div className="info">
            <div>가게명 : <span className="result">가게명 값</span></div>
            <label htmlFor ="name">공지사항</label>
            <div className="box">
            <input  type="text" id="name" name='name' value="" />
            {/* <span className="result">공지사항 값</span> */}
            <button className="confirmBtn">수정</button>
            </div>
           
            </div>
         
            </ProfileBlock>
      
    );
}

export default BizProfile;