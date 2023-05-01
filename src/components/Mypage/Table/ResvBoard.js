import React from "react";
import Table from "./CommonTable";
import TableRow from "./CommonTableRow";
import TableColumn from "./CommonTableCoumn";
import styled from "styled-components";

const ResvBlock  = styled.div`
    .board-title {
            font-size: 1.8rem;
            font-weight: bold;
            text-align: center;
            margin: 0 auto;
            background-color: #ff7f50;           
        }
    .common-table {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        border-spacing: 0;
        margin-bottom: 100px;
        }

        .common-table-header-column {
        border-bottom: 2px solid #ff7f50;
        padding: 0;
        font-size: 16px;
        padding: 10px 5px;
        font-weight: bold;
        }

        .common-table-row:hover {
        background-color: #ece6cc;
        cursor: pointer;
        }
        .common-table-column {
        padding: 10px 5px;
        }
    
`;
const ResvBoard = ({name}) => {
    
   
    const data = [
        {
            index:1,
            date : "23.04.07",
            rest : "스테이크하우스",
            people : "2명",
            time : "18:00",
            state : "예약대기"
        },
        {
            index:2,
            date : "23.04.07",
            rest : "스테이크하우스",
            people : "2명",
            time : "18:00",
            state : "예약완료"
        }
    ];

    return(
        <ResvBlock>
        <div className="board-title">{name}</div>
        <Table headersName={['날짜','매장명','인원수','시간','상태']}>
        {data && data.map(data => (
            <TableRow key={data.index}>
            <TableColumn>{data.date}</TableColumn>
            <TableColumn>{data.rest}</TableColumn>
            <TableColumn>{data.people}</TableColumn>
            <TableColumn>{data.time}</TableColumn>
            <TableColumn>{data.state}</TableColumn>
            </TableRow>
        
        ))}

        </Table>
        </ResvBlock>
    );
   
}

export default ResvBoard;