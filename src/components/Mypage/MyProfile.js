import React, { useEffect, useState ,useContext } from "react";
import styled from "styled-components";
import ProfileImg from "../../images/ProfileImg.png"
import AxiosApi from "../../api/AxiosApi";
import { MemberContext } from "../../context/MemberContext";

const MyProfileBlock = styled.div`  
    width: 70%;
    height: auto;
    margin: 30px auto;
    background-color: #F5F5F5;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 20px;
    .profileImg img{
        width: 200px;
        height: 200px;
    }
    button{
            margin-right: 20px;
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 26px;
            font-weight: bold;
            width: 200px; /* 원하는 너비 설정 */
            height: 50px;
            color: white;
            background-color: orange;
            font-size: 15px;
            font-weight: 400;
            border-radius: 18px;
            border: orange;
            font-weight: 700;
        }
    .profileInfo{
        box-sizing: border-box;
        background-color: wheat;
        border-radius: 30px;
        width: 500px;
        height: 250px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .box{
                display: flex;
                flex-direction: row;
                margin: auto 20px;
                justify-content: center;
                align-items: center;
                label{
                    font-size: 20px;
                    width: 80px;
                    margin : 10px auto;
           
                }
                input{
                    margin-left: 10px;
                    margin-right: 10px;
                    width: 250px; /* 원하는 너비 설정 */
                    height: 20px; /* 높이값 초기화 */
                    line-height : normal; /* line-height 초기화 */
                    padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
                    font-family: inherit; /* 폰트 상속 */
                    border: 1px solid #999;
                    border-radius: 18px; /* iSO 둥근모서리 제거 */
                }
                .result {
                    margin-left: 10px;
                    margin-right: 10px;
                    width: 250px; /* 원하는 너비 설정 */
                    height: 20px; /* 높이값 초기화 */
                    line-height : normal; /* line-height 초기화 */
                    padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
                    font-family: inherit; /* 폰트 상속 */
                    background-color: #999;
                }
            }
    }


`;

const MyProfile =  () => {
    const [showInput, setShowInput] = useState(false);
    const {memberValue,setMemberValue} = useContext(MemberContext);
    useEffect(() => {    
        const memberInfo = async() => {
            const rsp = await AxiosApi.memberGet(localStorage.getItem("userId")); 
            if(rsp.status === 200) setMemberValue(rsp.data[0]);
            console.log(rsp.data[0]);
           
        };
        memberInfo();            
    }, []);

    const onClickUpate =  async()=> {

        const rsp = await AxiosApi.memberUpdate(memberValue);
        if(rsp.data){
            console.log("회원정보 업데이트 완료!");
            setMemberValue(memberValue);
            //input창 닫기 
            setShowInput(false);
        } 
    }
    

    
    const onChange= (e) => {
        const{name,value} = e.target;
        setMemberValue(state => ({...state,[name]:value}));
    }
    if(!memberValue) return<MyProfileBlock>로그인이 필요합니다.</MyProfileBlock>;
    return(
        <MyProfileBlock>
        <div className="profileImg"><img src={ProfileImg} alt="Logo" /></div>
        <div className="profileInfo">
            <div className="text">
            <div className="box">
            <label htmlFor ="name">이름</label>
            {showInput ? <input  type="text" id="name" name='name' value={memberValue.name} onChange={onChange}/> :
                         <span className="result">{memberValue.name}</span>}
            </div>
            <div className="box">
            <label htmlFor ="nickName">닉네임</label>
            {showInput ? <input type="text" id="nickName" name='nickName' value={memberValue.nickName} onChange={onChange}/> :
                        <span className="result">{memberValue.nickName}</span>}
            </div>
            <div className="box">
            <label htmlFor ="intro">소개글</label>
            {showInput ? <input type="text" id="intro"/> :
                         <span className="result">소개글입니다.</span>}
            </div>
            <div className="box">
            <label htmlFor ="area">지역</label>
            {showInput ? <input type="text" id="area" name='addr' value={memberValue.addr.slice(0,9)} onChange={onChange}/> :
                        <span className="result">{memberValue.addr.slice(0,9)}</span>}
            </div>
            <div className="box">
            <label htmlFor ="tag">해시태그</label>
            {showInput ? <input type="text" id="tag"/> :
                         <span className="result">해시태그.</span>}
            </div>
            </div> 
        </div>
        {showInput? <button onClick={onClickUpate}>수정완료</button> :
                    <button onClick={()=> setShowInput(true)}>프로필수정</button>}
        </MyProfileBlock>
    );
}

export default MyProfile;