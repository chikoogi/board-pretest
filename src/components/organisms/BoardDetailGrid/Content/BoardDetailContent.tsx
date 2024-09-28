import styled from "./style.ts";
import ReadBoard from "@components/molecules/ReadBoard";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";

const BoardDetailContent = ({ data, boardId, boardType }: any) => {
  const navigate = useNavigate();

  const { mutate } = useBoardQuery();
  const deleteIssues = mutate.deleteIssues();

  if (!data) return;
  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>
        {boardType === QUESTION_BOARD && <div>질문 게시판</div>}
        {boardType === FREE_BOARD && <div>자유 게시판</div>}
      </div>
      <div css={styled.boardContainer}>
        <ReadBoard item={data} />
      </div>
      <div css={styled.actionContainer}>
        <div>
          <Button
            onClick={() => {
              navigate(`../edit/${data.number}`);
            }}
          >
            수정
          </Button>
          <Button
            onClick={() => {
              deleteIssues.mutate(data.node_id, {
                onSuccess: (res) => {
                  console.log("comp res", res);
                  // navigate("../list");
                  // navigate(`/${boardType}/list`);
                },
              });
            }}
          >
            삭제
          </Button>
        </div>
        <div>
          <Button onClick={() => navigate("../list")}>목록</Button>
        </div>
      </div>
    </div>
  );
};

export default BoardDetailContent;
