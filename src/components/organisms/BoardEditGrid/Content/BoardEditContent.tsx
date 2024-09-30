import styled from "./style.ts";
import InputBoard from "@components/molecules/InputBoard";
import { useNavigate } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useEffect, useState } from "react";
import ReactRouterPrompt from "react-router-prompt";
import Modal from "@components/atoms/Modal";
import Confirm from "@components/atoms/Confirm";

const BoardEditContent = ({ data, boardType }: any) => {
  const [isDirty, setIsDirty] = useState(false);

  const navigate = useNavigate();

  const { mutate } = useBoardQuery();
  const updateFreeMutate = mutate.updateIssuesFromFreeBoard();
  const updateQuestionMutate = mutate.updateIssuesFromFreeBoard();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <ReactRouterPrompt when={isDirty}>
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
          <InputBoard
            item={data}
            handleDirty={(d) => setIsDirty(d)}
            handleApply={(dataSet: any) => {
              if (boardType === FREE_BOARD) {
                updateFreeMutate.mutate(
                  { id: data.number, data: dataSet },
                  {
                    onSuccess: (res) => {
                      const boardId = res.number;
                      navigate(`/${boardType}/detail/${boardId}`);
                    },
                  }
                );
              } else if (boardType === QUESTION_BOARD) {
                updateQuestionMutate.mutate(
                  { id: data.number, data: dataSet },
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
