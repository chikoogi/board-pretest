import styled from "./style.ts";
import ReadBoard from "@components/molecules/ReadBoard";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { useModal } from "@src/provider/ModalProvider.tsx";
import Confirm from "@components/atoms/Confirm";
import { useEffect } from "react";
import { BoardItemProps, BoardType } from "@src/interfaces/common-interface.ts";

const BoardDetailContent = ({
  item,
  boardType,
}: {
  item: BoardItemProps;
  boardType: BoardType;
}) => {
  const navigate = useNavigate();
  const { showModal, closeModal } = useModal();

  const { mutate } = useBoardQuery();

  /* 이슈 삭제 status closed 로 대체
   const deleteIssues =
    boardType === FREE_BOARD
      ? mutate.deleteIssuesFromFreeBoard()
      : mutate.deleteIssuesFromQuestionBoard();
  */

  const deleteIssues = mutate.deleteIssues();

  useEffect(() => {
    if (item) {
      document.title = item.title;
    }
  }, [item]);

  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>
        {boardType === QUESTION_BOARD && <div>질문 게시판</div>}
        {boardType === FREE_BOARD && <div>자유 게시판</div>}
      </div>
      <div css={styled.boardContainer}>{item && <ReadBoard item={item} />}</div>
      <div css={styled.actionContainer}>
        <div css={styled.leftAction}>
          <Button
            variant="outlined"
            color={"info"}
            onClick={() => {
              navigate(`../edit/${item.boardNum}`);
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
                  deleteIssues.mutate(item.nodeId, {
                    onSuccess: () => {
                      navigate("../list");
                    },
                  });
                },
                onCancel: closeModal,
              });
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
