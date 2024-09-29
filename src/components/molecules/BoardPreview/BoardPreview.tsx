import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";

const BoardPreview = ({ data, boardType }: any) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    console.log(data);
    if (data) {
      setRows(data.items);
    }
  }, [data]);

  return (
    <div>
      <div>
        {boardType === FREE_BOARD && <span>자유 게시판</span>}
        {boardType === QUESTION_BOARD && <span>질문 게시판</span>}
      </div>
      <div>
        <List>
          {rows.length === 0 && <div>등록된 게시글이 없습니다.</div>}
          {rows.map((r) => (
            <ListItem key={r.id}>
              <ListItemButton>
                <ListItemText primary={r.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default BoardPreview;
