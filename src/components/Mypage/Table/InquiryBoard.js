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


const InquiryBoard = props => {
  const contents = [
    {
      no : "1",
      storeName : "세컨포레스트",
      index : "주차 가능한가요? ",
      state :  "답변대기"
    },
    {
      no : "2",
      storeName : "세컨포레스트",
      index : "주차 가능한가요? ",
      state :  "답변대기"
    },
    {
      no : "3",
      storeName : "세컨포레스트",
      index : "주차 가능한가요? ",
      state :  "답변대기"
    },
    {
      no : "4",
      storeName : "세컨포레스트",
      index : "주차 가능한가요? ",
      state :  "답변대기"
    },
    {
      no : "5",
      storeName : "세컨포레스트",
      index : "주차 가능한가요? ",
      state :  "답변대기"
    }
    ];

    return (
      <TableBlock>
        <Table headersName={['NO.', '매장명', '제목', '상태']}>
        {contents && contents.map((e) => (
          <TableRow key ={e.no}>
            <TableColumn>{e.no}</TableColumn>
            <TableColumn>{e.storeName}</TableColumn>
            <TableColumn>{e.index}</TableColumn>
            <TableColumn>{e.state}</TableColumn>
          </TableRow>
        ))}
        </Table>
      </TableBlock>
    )
  }
  
  export default InquiryBoard;
