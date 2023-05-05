import React, { useState } from "react";
import Password from "./Password";
import MemberInfo from "./MemberInfo";
const MyInfo = () => {

    const [isPwd,setIsPwd] = useState(false);

    return(
        <>
        {!isPwd ? (<Password setIsPwd={setIsPwd}>내정보를 수정하려면 비밀번호를 입력하세요.</Password>) :
            (<MemberInfo/>)}
        </>
    );
}

export default MyInfo;