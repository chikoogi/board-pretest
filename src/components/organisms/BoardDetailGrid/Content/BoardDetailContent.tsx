import styled from "./style.ts";
import ReadBoard from "@components/molecules/ReadBoard";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { useModal } from "@src/provider/ModalProvider.tsx";
import Confirm from "@components/atoms/Confirm";
import Alert from "@components/atoms/Alert";
import { useEffect } from "react";

const BoardDetailContent = ({ data, boardId, boardType }: any) => {
  const navigate = useNavigate();
  const { showModal, closeModal } = useModal();

  const { mutate } = useBoardQuery();
  const deleteIssues = mutate.deleteIssues();

  useEffect(() => {
    if (data) {
      document.title = data.title;
    }
  }, [data]);

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
        <div css={styled.leftAction}>
          <Button
            variant="outlined"
            color={"info"}
            onClick={() => {
              navigate(`../edit/${data.number}`);
            }}
          >
            수정
          </Button>
          <Button
            variant="outlined"
            color={"warning"}
            onClick={() => {
              showModal(Confirm, {
                message: "삭제하시겠습니까?",
                onConfirm: () => {
                  navigate("../list");
                },
                onCancel: () => closeModal(),
              });
              /*              deleteIssues.mutate(data.node_id, {
                onSuccess: (res) => {
                  console.log("comp res", res);
                  // navigate("../list");
                  // navigate(`/${boardType}/list`);
                },
              });*/
            }}
          >
            삭제
          </Button>
        </div>
        <div css={styled.rightAction}>
          <Button variant="contained" onClick={() => navigate("../list")}>
            목록
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoardDetailContent;
