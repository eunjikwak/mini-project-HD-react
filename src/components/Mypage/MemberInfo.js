
import React, { useState, useContext } from 'react';
import AxiosApi from '../../api/AxiosApi';
import styled from 'styled-components';
import {useNavigate } from "react-router-dom";
import { MemberContext } from '../../context/MemberContext';
import Modal from '../../utils/Modal';
import Password from './Password';
const MemberInfoBlock = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
      
    .box{
        display: flex;
        flex-direction: row;
        align-items: center;
        
            label{
                width: 150px;
                text-align: center;
                }
        margin: 1em;
            .btn{
                width: 100px;
                height: 50px;
                margin: 0  20px;
                display: inline-block;
                border: none;
                border-radius: 4px;
                padding: 8px 16px;
                background-color: #FF7F50;
                color: #fff;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;  
                &:hover{
                    background-color: #FFA07A;
                 }
                &:active{
                    background-color: #FFA07A;
                }
            }
            .delBtn{
                font-family: inherit;
                background-color: #FBF4EF;
                font-size: 18px;
                border: none;
                position: absolute;
                right: 0;
                bottom:0;
                cursor: pointer;
                &:hover{
                    font-weight: bolder;
                }
             }
           
   
        }
  input{
        margin-left: 10px;
        margin-right: 10px;
        width: 100%; 
        height: 20px;
        line-height : normal;
        padding: .8em .5em; 
        font-family: inherit; 
        border: 1px solid #999;
        border-radius: 18px;
        
    }
   
  

`;

const MemberInfo = () => {
    //컨텍스 api를 사용
    const{memberValue,setMemberValue} = useContext(MemberContext);
    //팝업 처리
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    //탈퇴팝업처리 
    const [delOpen, setDelOpen] = useState(false);
    const closeDelModal = () => {
        setDelOpen(false);
    };
    
    //탈퇴 완료 팝업
    const [delCompleted, setDelCompleted] = useState(false);
    const closeCompletedModal = () => {
        setDelCompleted(false);
        localStorage.removeItem("userId");
        navigate('/');
    };
    //navigate사용
    const navigate = useNavigate();

    //input 값 변경시 상태 변경
    const onChange = (e) => {
        const{name,value} = e.target;
        setMemberValue(state => ({...state,[name]:value}));
    };

    //수정버튼 클릭 시
    const submit = async()=> {

        const rsp = await AxiosApi.memberUpdate(memberValue);
        if(rsp.data){
            //console.log("회원정보 업데이트 완료!");
            setMemberValue(memberValue);
            setModalOpen(true);
        } 
    }
    

    //회원 탈퇴 클릭
    const memberDelete = async() => {
        console.log("들어옴?");
            const rsp = await AxiosApi.memberDel(memberValue.memId);
            if (rsp.data) {
              console.log(rsp.data);
              setDelCompleted(true);
            }
           
    }

 
    if(!memberValue) return<div>로그인이 필요합니다.</div>;
	return (
 
		    <MemberInfoBlock>
            <div className='titleName'> 내 정보 조회 / 수정 </div>
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
                <button className='btn' type="submit" onClick={submit}>수정</button>
                <button className='btn' onClick={()=>navigate(0)} style={{backgroundColor : "#EEE4DC"}}> 취소 </button>
                <button className='delBtn'>회원탈퇴</button>
                </div>
                
                {/* <Modal open={modalOpen} close={closeModal} type ="ok" header="수정 완료">회원 정보 수정이 완료 되었습니다.</Modal> */}
                <Modal open={delCompleted} close={closeCompletedModal} type ="ok" header="탈퇴 완료">탈퇴가 완료 되었습니다.</Modal>
                <Modal open={delOpen} close={closeDelModal}  header="회원탈퇴"><Password type="del" memberDelete={memberDelete}>탈퇴하시려면 비밀번호 입력이 필요합니다.</Password></Modal>
                
        </MemberInfoBlock>
   

    );
}


export default MemberInfo;