import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import styled from "@components/templates/FreeBoardWriteTemplate/style.ts";
import BoardWriteContent from "@components/organisms/BoardWriteGrid/Content";

const QuestionBoardWriteTemplate = () => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.contentContainer}>
        <BoardWriteContent boardType={QUESTION_BOARD} />
      </div>
    </div>
  );
};

export default QuestionBoardWriteTemplate;
