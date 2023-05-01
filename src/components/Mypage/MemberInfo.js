
import React, {useState, useEffect, useContext } from 'react';
import AxiosApi from '../../api/AxiosApi';
import styled from 'styled-components';
import {useNavigate } from "react-router-dom";
import { MemberContext } from '../../context/MemberContext';

const MemberInfoBlock = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      
    .box{
        display: flex;
        flex-direction: row;
        align-items: center;
            label{
                width: 150px;
                text-align: center;
                }
        margin: 1em;
            button{
                width: 100px;
                height: 50px;
                margin: 0  20px;
                display: inline-block;
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                background-color: #ffa07a;
                color: #fff;
                text-align: center;
                font-size: 16px;
                cursor: pointer;  
                &:hover{
                    background-color: #ff7f50;
                 }
                &:active{
                    background-color: #faebd7;
                    color:#999;
                }
            }
           
   
        }
  input{
        margin-left: 10px;
        margin-right: 10px;
        width: 100%; /* 원하는 너비 설정 */
        height: 20px; /* 높이값 초기화 */
        line-height : normal; /* line-height 초기화 */
        padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
        font-family: inherit; /* 폰트 상속 */
        border: 1px solid #999;
        border-radius: 18px; /* iSO 둥근모서리 제거 */
        
    }
  

`;

const MemberInfo = ({id}) => {
    //컨텍스 api를 사용
    const{memberValue,setMemberValue} = useContext(MemberContext);
    const navigate = useNavigate();
    const onChange = (e) => {
        const{name,value} = e.target;
        setMemberValue(state => ({...state,[name]:value}));
    };

    const submit = async()=> {

        const rsp = await AxiosApi.memberUpdate(memberValue);
        if(rsp.data){
            console.log("회원정보 업데이트 완료!");
            setMemberValue(memberValue);
          
        } 
    }
    useEffect(()=> console.log(memberValue),[]);
 

    if(!memberValue) return<div>로그인이 필요합니다.</div>;
	return (
 
		    <MemberInfoBlock>
            
            <h1> 내 정보 조회 / 수정 </h1>
                  <div className='box'>
                  <label htmlFor='id'>아이디</label>
                  <input id='id' name='memId'value={memberValue.memId} disabled={true}/>
                  </div>
                  <div className='box'>
                  <label htmlFor='password'>비밀번호</label>
                  <input id='password' name='pwd' type="password" value={memberValue.pwd} onChange={onChange}/>
                  </div>
                  <div className='box'>
                  <label htmlFor='name'>이름</label>
                  <input id='name'name='name'value={memberValue.name} onChange={onChange} />
                  </div>
                  <div className='box'>
                  <label htmlFor='nickName'>닉네임</label>
                  <input id='nickName' name='nickName' value={memberValue.nickName} onChange={onChange}/>
                  </div>
                  <div className='box'>
                  <label htmlFor='phoneNum'>핸드폰 번호</label>
                  <input id='phoneNum' name='phoneNum' value={memberValue.phoneNum} onChange={onChange}/>
                  </div>
                  <div className='box'>
                  <label htmlFor='addr'>주소</label>
                  <input id='addr' name='addr' value={memberValue.addr} onChange={onChange}/>
                  </div>
                  <div className='box'>
                  <label htmlFor='imgfile'>프로필 사진</label>
                  <input id='imgfile' name='imgFileName' type="text" value={memberValue.imgFileName||''} onChange={onChange}/>
                  </div>
                  <div className='box'>
                  <label htmlFor='email'>이메일</label>
                  <input id='email' name='email' value={memberValue.email} onChange={onChange}/>
                  </div>
                <div className="box">
                <button type="submit" onClick={submit}>수정</button>
                <button onClick={()=>navigate(0)}> 취소 </button>
                </div>
        </MemberInfoBlock>
   

    );
}


export default MemberInfo;