import styled from "./style.ts";
import { useNavigate, useParams } from "react-router-dom";
import { getYYYYMMDDFormat } from "@src/tools/common-tool.ts";
import Profile from "@components/molecules/Profile";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { BoardItemProps } from "@src/interfaces/common-interface.ts";

const Row = ({ rowData }: { rowData: BoardItemProps }) => {
  const navigate = useNavigate();
  return (
    <tr css={styled.trWrapper} onClick={() => navigate(`../detail/${rowData.boardNum}`)}>
      <td>{rowData.boardNum}</td>
      <td>{rowData.title}</td>
      <td>
        <Profile src={rowData.userImageUrl} name={rowData.userName} />
      </td>
      <td>{getYYYYMMDDFormat(new Date(rowData.createdAt), "hyphen", true)}</td>
    </tr>
  );
};

const TableForBoard = ({ rows }: { rows: BoardItemProps[] }) => {
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
                <tr css={styled.emptyTr}>
                  <td colSpan={4} css={styled.noData}>
                    등록된 게시글이 없습니다.
                  </td>
                </tr>
              )}
              {rows.map((r: BoardItemProps) => (
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
