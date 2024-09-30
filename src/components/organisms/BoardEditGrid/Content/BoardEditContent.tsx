import styled from "./style.ts";
import InputBoard from "@components/molecules/InputBoard";
import { useNavigate } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useEffect, useState } from "react";
import ReactRouterPrompt from "react-router-prompt";
import Modal from "@components/atoms/Modal";
import Confirm from "@components/atoms/Confirm";
import { useBeforeUnload } from "@src/hooks/useBeforeUnload.ts";
import { BoardItemProps, BoardType, updateBoardItemDTO } from "@src/interfaces/common-interface.ts";

const BoardEditContent = ({
  data,
  boardType,
  enableDirty = true,
}: {
  data: any;
  boardType: BoardType;
  enableDirty?: boolean;
}) => {
  const [item, setItem] = useState<BoardItemProps | undefined>(undefined);
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();

  useBeforeUnload(isDirty && enableDirty);
  const { mutate } = useBoardQuery();
  const updateFreeMutate = mutate.updateIssuesFromFreeBoard();
  const updateQuestionMutate = mutate.updateIssuesFromFreeBoard();

  useEffect(() => {
    if (data) {
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
    <>
      <ReactRouterPrompt when={isDirty && enableDirty}>
        {({ isActive, onConfirm, onCancel }) => {
          return (
            <Modal isOpen={isActive} onClose={onCancel}>
              <Confirm
                title={"작성 중인 내용이 있습니다."}
                message={
                  <>
                    이 페이지를 벗어나면 작성중인 내용이 사라집니다. <br /> 이동하시겠습니까?
                  </>
                }
                confirmLabel={"이동하기"}
                cancelLabel={"취소"}
                onConfirm={onConfirm}
                onCancel={onCancel}
              />
            </Modal>
          );
        }}
      </ReactRouterPrompt>
      <div css={styled.wrapper}>
        <div css={styled.topContainer}>게시판</div>
        <div css={styled.contentContainer}>
          <InputBoard<BoardItemProps>
            item={item}
            handleDirty={(d) => setIsDirty(d)}
            handleApply={(dataSet: updateBoardItemDTO) => {
              if (!item) return;
              if (boardType === FREE_BOARD) {
                updateFreeMutate.mutate(
                  { id: item.boardNum, data: dataSet },
                  {
                    onSuccess: (res) => {
                      const boardId = res.number;
                      navigate(`/${boardType}/detail/${boardId}`);
                    },
                  }
                );
              } else if (boardType === QUESTION_BOARD) {
                updateQuestionMutate.mutate(
                  { id: item.boardNum, data: dataSet },
                  {
                    onSuccess: (res) => {
                      const boardId = res.number;
                      navigate(`/${boardType}/detail/${boardId}`);
                    },
                  }
                );
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BoardEditContent;
