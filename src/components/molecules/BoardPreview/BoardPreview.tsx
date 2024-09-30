import { Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useNavigate } from "react-router-dom";
import styled from "./style.ts";
import { getMMDDFormat } from "@src/tools/common-tool.ts";
const BoardPreview = ({ data, boardType }: any) => {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data) {
      setRows(data.items);
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

          {rows.map((r: any) => (
            <div
              key={r.id}
              onClick={() => {
                const boardId = r.number;
                navigate(`/${boardType}/detail/${boardId}`);
              }}
              css={styled.rowContainer}
            >
              <div>{r.title}</div>
              <div>{getMMDDFormat(new Date(r.created_at), "slash", true)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardPreview;
