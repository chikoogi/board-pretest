import styled from "./style.ts";
import InputBoard from "@components/molecules/InputBoard";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useEffect } from "react";

const BoardWriteContent = ({ boardType }: any) => {
  const navigate = useNavigate();

  const { mutate } = useBoardQuery();
  const addFreeMutate = mutate.addIssuesFromFreeBoard();
  const addQuestionMutate = mutate.addIssuesFromQuestionBoard();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <div css={styled.wrapper}>
        <div css={styled.topContainer}>게시판</div>
        <div css={styled.contentContainer}>
          <InputBoard
            handleApply={(dataSet: any) => {
              if (boardType === FREE_BOARD) {
                addFreeMutate.mutate(dataSet, {
                  onSuccess: (res) => {
                    console.log("comp");

                    const boardId = res.number;
                    // navigate(`/${boardType}/detail/${boardId}`);
                    navigate(`/${boardType}/list`);
                  },
                });
              } else if (boardType === QUESTION_BOARD) {
                addQuestionMutate.mutate(dataSet, {
                  onSuccess: (res) => {
                    const boardId = res.number;
                    navigate(`/${boardType}/detail/${boardId}`);
                  },
                });
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BoardWriteContent;
