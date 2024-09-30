import styled from "./style.ts";
import ReadBoard from "@components/molecules/ReadBoard";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { useModal } from "@src/provider/ModalProvider.tsx";
import Confirm from "@components/atoms/Confirm";
import { useEffect, useState } from "react";
import { BoardItemProps, BoardType } from "@src/interfaces/common-interface.ts";

const BoardDetailContent = ({ data, boardType }: { data: any; boardType: BoardType }) => {
  const [item, setItem] = useState<BoardItemProps | undefined>(undefined);

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
    if (data) {
      document.title = data.title;
      setItem({
        id: data.id,
        nodeId: data.node_id,
        boardNum: data.number,
        createdAt: data.created_at,
        title: data.title,
        description: data.body,
        userImageUrl: data.user.avatar_url,
        userName: data.user.login,
      });
    }
  }, [data]);

  if (!data) return;
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
              if (!item) return;
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
                  if (!item) return;

                  deleteIssues.mutate(item.nodeId, {
                    onSuccess: () => {
                      navigate("../list");
                    },
                  });
                },
                onCancel: () => closeModal(),
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
