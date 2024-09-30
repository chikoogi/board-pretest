import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useNavigate } from "react-router-dom";
import styled from "./style.ts";
import { getMMDDFormat } from "@src/tools/common-tool.ts";
import { BoardItemProps, BoardType } from "@src/interfaces/common-interface.ts";
const BoardPreview = ({ data, boardType }: { data: any; boardType: BoardType }) => {
  const navigate = useNavigate();
  const [rows, setRows] = useState<BoardItemProps[]>([]);

  useEffect(() => {
    if (data) {
      const items: BoardItemProps[] = data.items.map((v: any) => ({
        id: v.id,
        nodeId: v.node_id,
        boardNum: v.number,
        createdAt: v.created_at,
        title: v.title,
        description: v.body,
        userImageUrl: v.user.avatar_url,
        userName: v.user.login,
      }));
      setRows(items);
    }
  }, [data]);

  return (
    <div css={styled.wrapper}>
      <div css={styled.title}>
        {boardType === FREE_BOARD && <span>자유 게시판</span>}
        {boardType === QUESTION_BOARD && <span>질문 게시판</span>}
      </div>
      <Divider />
      <div css={styled.listContainer}>
        <div css={styled.listSubContainer}>
          {rows.length === 0 && <div css={styled.emptyContainer}>등록된 게시글이 없습니다.</div>}

          {rows.map((r: BoardItemProps) => (
            <div
              key={r.id}
              onClick={() => {
                const boardId = r.boardNum;
                navigate(`/${boardType}/detail/${boardId}`);
              }}
              css={styled.rowContainer}
            >
              <div>{r.title}</div>
              <div>{getMMDDFormat(new Date(r.createdAt), "slash", true)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardPreview;
