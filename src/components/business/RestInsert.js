import React from "react";

const RestInsert = () => {

    return(
     

            <>
            <p>매장등록</p> 
            <div className='titleName'> 내 정보 조회 / 수정 </div>
                  <div className='box'>
                  <label htmlFor='id'>사업자 ID :</label>
                  <input id='id' name='memId' disabled={true}/>
                  </div>
            <div>
            사업자 ID :
            사업자 등록번호 : 
            매장 이름 :
            전화번호 : 
            주소 :
            공지사항 : 
            영업시간 :
            소개 글 :
            예약가능 여부:
            매장 분류 : 

        

            </div>


            </>
      
    );
}

export default RestInsert;