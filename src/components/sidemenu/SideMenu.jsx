import React, { useRef, useState, useEffect } from "react";
import styled, {css} from "styled-components";
import MenuImg from "../../images/pngwing.com-removebg-preview.png";
import { Link ,useNavigate  } from "react-router-dom";
const MenuButton = styled.div`
  height  : 100px;
  width : 100px;
  position: absolute;
  border-radius : 20px;
  right: 0px;
  top: 0px;
  background-image: url(${MenuImg});
  cursor: pointer;
`;

const Box = styled.div`
    display: none;
    height: 630px;
    width: 260px;
    background-color: coral;
    border-radius: 20px;
    position: absolute;
    top: 0px;
    left: -160px;
    z-index: 1;

   

    ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-content: center;
     
      .header{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: white;

      }


    
    .box{
        width: 320px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: center;


    }

      .item{
        height: 80px;
        width: 200px;
        color: white;
        border-top: 1px solid ivory;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
            font-weight: bold;
        }
      }

     
    `}

   
`;

const SideMenu =({setCategory}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {   
        const clickOutside = (event) =>{
            if(ref.current && !ref.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener("click", clickOutside);
        return () => {
            document.removeEventListener("click", clickOutside);
        };

    },[ref]);

    const onClickClose = () => {
        setIsOpen(false);
    }
    
    
    const onClickMenu = () => {
        setIsOpen(!isOpen);
    }

    const onClickBox = (event) => {
        event.stopPropagation();
    };

    const handleLinkClick = (path,category) => {
        const queryParams = new URLSearchParams();
        if(category) queryParams.set("category", category);
        navigate({ pathname: path, search: queryParams.toString() }); 
        setIsOpen(false);
      };

    return(
        
            <MenuButton onClick={onClickMenu} ref={ref}>
                <Box isOpen={isOpen} >
                   <div className="header">메뉴</div>
                    <div className="box" onClick={onClickBox}>
                        <div className="item" onClick={()=> handleLinkClick("/Login")}>로그인</div>
                        <div className="item" onClick={()=> handleLinkClick("/MyPage")}>마이페이지</div>
                        <div className="item" onClick={()=> handleLinkClick("/MyPage","menu1")}>내 정보/수정</div>
                        <div className="item" onClick={()=> handleLinkClick("/MyPage","menu3")}>찜한 가게</div>
                        <div className="item" onClick={()=> handleLinkClick("/MyPage","menu4")}>1:1 문의 내역</div>
                        <div className="item" onClick={()=> handleLinkClick("/MyPage","menu5")}>예약 현황</div>
                    </div>
                </Box>
            </MenuButton>
        
    );
}

export default SideMenu;