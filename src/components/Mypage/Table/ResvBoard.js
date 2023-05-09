
import React, { useEffect, useState } from "react";
import Table from "../../../utils/table/CommonTable";
import TableColumn from "../../../utils/table/CommonTableColumn";
import TableRow from "../../../utils/table/CommonTableRow";
import styled from "styled-components";
import AxiosApi from "../../../api/AxiosApi";
import PageNation from "../../../utils/PageNation";
import Modal from "../../../utils/Modal";
import ResvView from "../../Mypage/ResvView";
const ResvBlock  = styled.div`
    .board-title {
            font-size: 1.8rem;
            font-weight: bold;
            text-align: center;
            margin: 0 auto;
           
        }
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
        background-color:#F0B7A2;
        cursor: pointer;
        }
        .common-table-column {
        padding: 10px 5px;
        }
    
`;

//리뷰게시판
const ResvBoard = ({stat}) => {
    //리뷰내역 가져오기 
    const [resvValue, setResvValue] = useState([]);
    const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 번호
    //팝업 처리
    const [modalOpen, setModalOpen] = useState(false);
    //클릭한 행 상태 
    const [selectedResv, setSelectedResv] = useState(null);
    const closeModal = () => {
            setModalOpen(false);
        };
    //보여질 페이지 개수
    const ITEMS_PAGE = 3;
    useEffect(() => {
    const resvInfo = async() => {
        const rsp = await AxiosApi.resvGet(localStorage.getItem("userId"),stat);
        if(rsp.status === 200) setResvValue(rsp.data);
        console.log(rsp.data);
    };
   resvInfo();

    },[]);
    const handlePageClick = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
      };
      const pageCount = Math.ceil(resvValue.length / ITEMS_PAGE); // 전체 페이지 수
      const offset = currentPage * ITEMS_PAGE; // 현재 페이지에서 보여줄 아이템의 시작 인덱스
      const currentPageData = resvValue.slice(offset, offset + ITEMS_PAGE);

    const resvClick = (resv) => {
        setModalOpen(true);
        setSelectedResv(resv);
    }
    return(
        <>
        <ResvBlock>
        <div className="board-title">{stat}</div>
        <Table headersName={['날짜','매장명','인원수','시간','상태']}>
        {resvValue && currentPageData.map((e) => (
            <TableRow key={e.resvId} onClick = {() =>resvClick(e)}>
            <TableColumn >{e.applicationDate}</TableColumn>
            <TableColumn>{e.restName}</TableColumn>
            <TableColumn>{e.resvPeople}</TableColumn>
            <TableColumn>{e.applicationDate}</TableColumn>
            <TableColumn>{e.resvStat}</TableColumn>
            </TableRow>
        
        ))}
        </Table>
        <PageNation pageCount={pageCount} onPageChange={handlePageClick}/>
        </ResvBlock>
        <Modal open={modalOpen} close={closeModal} header="예약 정보" type="resv">{selectedResv&& <ResvView data={selectedResv}/>}</Modal>

        </>
    );
   
}

export default ResvBoard;