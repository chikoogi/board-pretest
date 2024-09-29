import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useParams } from "react-router-dom";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";
import BoardEditContent from "@components/organisms/BoardEditGrid/Content";

const QuestionBoardEditTemplate = () => {
  const { id } = useParams();

  const { query } = useBoardQuery();
  const { data } = query.getIssuesDetailFromQuestionBoard(id);

  return (
    <div css={styled.wrapper}>
      <div css={styled.contentContainer}>
        <BoardEditContent boardType={QUESTION_BOARD} data={data} />
      </div>
    </div>
  );
};

export default QuestionBoardEditTemplate;
