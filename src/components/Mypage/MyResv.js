import React from "react";
import ResvBoard from "./Table/ResvBoard";
import styled from "styled-components";


const MyResv = () => {


    return(

        <>
        <p>예약 현황</p>
        <ResvBoard name ="예약대기"/>
        <ResvBoard name ="예약완료"/>
        </>
    );
}

export default MyResv;