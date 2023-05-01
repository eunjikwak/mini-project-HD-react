import React from "react";
import Table from "./CommonTable";
import TableColumn from "./CommonTableCoumn";
import TableRow from "./CommonTableRow";
import styled from "styled-components";

const TableBlock = styled.div`
.common-table {
width: 80%;
margin: 0 auto;
text-align: center;
border-spacing: 0;

}
.common-table-header-column {
padding: 0;
font-size: 16px;
padding: 10px 5px;
font-weight: bold;
}
.common-table-row {
    height: 200px;
    background-color: gainsboro;
   
}
.common-table-row:hover {
background-color: #ece6cc;
cursor: pointer;

}
.common-table-column {
padding: 10px 5px;
border-left: 1.5px solid pink;
border-bottom: 30px solid pink;
}
`;
const ReviewBoard = () => {

    const ex = [
        {
            id : 1,
            date : "2023.04.07",
            rest : "스테이크 하우스",
            menu : "티본스테이크",
            img : "",
            contents :"좋아요"
        },
        {
            id :2,
            date : "2023.04.07",
            rest : "스테이크 하우스",
            menu : "티본스테이크",
            img : "",
            contents :"좋아요"
        }
    ]

    return(
        <TableBlock>
        <Table headersName ={['날짜','매장','메뉴','사진','리뷰내역']}>
        {ex.map(data => (
            <TableRow key ={data.id}>
                <TableColumn>{data.date}</TableColumn>
                <TableColumn>{data.rest}</TableColumn>
                <TableColumn>{data.menu}</TableColumn>
                <TableColumn>{data.img}</TableColumn>
                <TableColumn>{data.contents}</TableColumn>
            </TableRow>
        ))}
        </Table>
        </TableBlock>
    );
}

export default ReviewBoard;