import React from "react";
import Table from "../../utils/table/CommonTable";
import TableRow from "../../utils/table/CommonTableRow";
import TableColumn from "../../utils/table/CommonTableColumn";
import styled from "styled-components";

const InquriyBlock  = styled.div`
    .inquriyTitle {
            font-size: 1.3rem;
            font-weight: bold;
            margin-left:10%;
            margin-bottom: 20px;
        }
    .common-table {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        border-spacing: 0;
        margin-bottom: 20px;
        }

        .common-table-header-column {
        border-bottom: 2px solid #ff7f50;
        padding: 0;
        font-size: 16px;
        padding: 10px 5px;
        font-weight: bold;
        }

        .common-table-row:hover {
        background-color:#F0B7A2;
        cursor: pointer;
        }
        .common-table-column {
        padding: 10px 5px;
        }
    
`;

const InquiryList = ({data,children}) => {

    return(
        <InquriyBlock>
         <div className="inquriyTitle">{children}</div>
        <Table headersName={['날짜','NO.','매장명','문의제목','상태']}>
          {data.map((e) => (
            <TableRow key = {e.no}>
            <TableColumn>{e.date}</TableColumn>
             <TableColumn>{e.no}</TableColumn>
              <TableColumn>{e.restName}</TableColumn>
               <TableColumn>{e.title}</TableColumn>
                <TableColumn>{e.stat}</TableColumn>
            </TableRow> 

          ))} 

        </Table>
        </InquriyBlock>
    );
}

export default InquiryList;