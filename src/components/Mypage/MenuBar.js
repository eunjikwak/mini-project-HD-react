import React, { useState } from "react";
import styled, {css} from "styled-components";
import {useNavigate } from "react-router-dom";

const categories = [
    {
        name :'menu1',
        text : '내정보 / 수정'
    },
    {
        name :'menu2',
        text : '내가 쓴 리뷰'
    },
    
    {
        name :'menu3',
        text : '찜한 가게'
    },
    
    {
        name :'menu4',
        text : '1:1 문의내역'
    },
    
    {
        name :'menu5',
        text : '예약 현황'
    }
];
const MenuBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
    background-color: #eee;
    width : 300px;
    
    .title{
      
        font-size: 25px;
        font-weight: bold;
        
    }
    hr{
        border: 2px solid black;
        width: 80%;
        margin-bottom: 2rem;
    }
    .btn{
            font: inherit;
            border :none;
            margin-top: 300px;
            padding: 0;
            cursor: pointer;
            align-items: end;
     } 

`;

const Category = styled.div`
    font-size: 20px;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 2rem;
    text-align: center;
    &:hover {
        color:#3bc9db;
    }
    ${props => 
        props.active && css`
        font-weight: 600;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}
    & + & {
        margin-bottom: 0.7rem;
    }
    
`;

const MenuBar = ({onSelect,category}) => {
    const [userId, setUserId] = useState(window.localStorage.getItem("userId"));
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("userId");
        setUserId(null);
        navigate('/home');  
      };
    return(
        <MenuBlock>
            <Category key="nomal" onClick={()=>navigate(0)}>
            <span className="title">마이페이지</span>               
            </Category>
            <hr />
          
        {categories.map(c=>(
            <Category key={c.name} active={category===c.name} onClick={()=>onSelect(c.name)}>
            {c.text}                
            </Category>
        ))}
        {userId ? (
            <button className="btn" onClick={logout}>Logout</button>
                ) : (
            <button className="btn" onClick={()=> {navigate("/")}}>Login</button>
         )}
        </MenuBlock>
    );
}

export default MenuBar;