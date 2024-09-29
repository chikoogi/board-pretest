import styled from "./style.ts";
import Pagination from "@components/atoms/Pagination/Pagination.tsx";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useNavigate, useParams } from "react-router-dom";
import { getYYYYMMDDFormat } from "@src/tools/common-tool.ts";
import Profile from "@components/molecules/Profile";
import { PER_PAGE } from "@src/common/queries/queries.ts";

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

const TableForBoard = ({ rows, totalRows, onChangePage }: { rows: any[]; totalRows: number }) => {
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
              {rows.length === 0 && (
                <tr>
                  <td colSpan={4} css={styled.noData}>
                    등록된 게시글이 없습니다.
                  </td>
                </tr>
              )}
              {rows.map((r: any) => (
                <Row key={r.id} rowData={r} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableForBoard;
