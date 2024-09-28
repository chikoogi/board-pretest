import styled from "./style.ts";
import Pagination from "@components/atoms/Pagination/Pagination.tsx";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useNavigate, useParams } from "react-router-dom";
import { getYYYYMMDDFormat } from "@src/tools/common-tool.ts";
import Profile from "@components/molecules/Profile";

const Row = ({ rowData }: any) => {
  const { boardType } = useParams();
  const navigate = useNavigate();
  return (
    <tr css={styled.trWrapper} onClick={() => navigate(`../detail/${rowData.number}`)}>
      <td>{rowData.number}</td>
      <td>{rowData.title}</td>
      <td>
        <Profile src={rowData.user.avatar_url} name={rowData.user.login} />
      </td>
      <td>{getYYYYMMDDFormat(new Date(rowData.created_at), "hyphen", true)}</td>
    </tr>
  );
};

const TableForBoard = ({ rows }: { rows: any[] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  /*  const rows = Array.from({ length: 1000 }, (_, idx) => ({
    id: idx,
    name: faker.location.city(),
    date: faker.string.sample(),
    person: faker.string.sample(),
  }));*/

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 현재 페이지에 해당하는 데이터 추출
  const paginatedRows = rows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div css={styled.wrapper}>
        <div css={styled.tableContainer}>
          <table css={styled.tableWrapper}>
            <thead>
              <tr>
                <th scope="col">
                  <span>번호</span>
                </th>
                <th scope="col">
                  <span>제목</span>
                </th>
                <th scope="col">
                  <span>작성자</span>
                </th>
                <th scope="col">
                  <span>작성일</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedRows.length === 0 && (
                <tr>
                  <td colSpan={4} css={styled.noData}>
                    등록된 게시글이 없습니다.
                  </td>
                </tr>
              )}
              {paginatedRows.map((r: any) => (
                <Row key={r.id} rowData={r} />
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Pagination
            totalItems={rows.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
          <div>{currentPage}</div>
        </div>
      </div>
    </>
  );
};

export default TableForBoard;
