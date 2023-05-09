import React from "react";
import InquiryList from "./InquriyList";
const RestInquiry = () => {
    //답변완료 데이터예시
    const data2=[

        {
            date : '2023-05-09',
            no : 1,
            restName : "매장명",
            title : "문의 제목",
            stat : "답변완료"
        },
                {
            date : '2023-05-09',
            no : 2,
            restName : "매장명",
            title : "문의 제목",
            stat : "답변완료"
        }
        
    ];
      //답변전 데이터 예시
    const data1=[

        {
            date : '2023-05-09',
            no : 1,
            restName : "매장명",
            title : "문의 제목",
            stat : "답변대기"
        },
                {
            date : '2023-05-09',
            no : 2,
            restName : "매장명",
            title : "문의 제목",
            stat : "답변대기"
        }
        
    ];
    return(
     

            <>
            <p>고객 1:1문의</p>
            <InquiryList data={data1}>새로운 문의내역</InquiryList>
            <InquiryList data={data2}>이전 문의내역</InquiryList>
            </>
      
    );
}

export default RestInquiry;