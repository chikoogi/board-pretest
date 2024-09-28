import styled from "./style.ts";
import InputBoard from "@components/molecules/InputBoard";
import { useNavigate } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";

const BoardEditContent = ({ data, boardType }: any) => {
  const navigate = useNavigate();

  const { mutate } = useBoardQuery();
  const updateFreeMutate = mutate.updateIssuesFromFreeBoard();
  const updateQuestionMutate = mutate.updateIssuesFromFreeBoard();

  return (
    <>
      <div css={styled.wrapper}>
        <div css={styled.topContainer}>게시판</div>
        <div css={styled.contentContainer}>
          <InputBoard
            item={data}
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
