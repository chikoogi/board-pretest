import { useBoardQuery } from "@src/common/queries/queries.ts";
import { QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useParams } from "react-router-dom";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";
import BoardDetailContent from "@components/organisms/BoardDetailGrid/Content";
import LoadingDot from "@components/atoms/LoadingDot/LoadingDot.tsx";

const QuestionBoardDetailTemplate = () => {
  const { id } = useParams();

  const { query } = useBoardQuery();

  const { data, isLoading } = query.getIssuesDetailFromQuestionBoard(id);

  if (isLoading) {
    return <LoadingDot />;
  }
  return (
    <div css={styled.wrapper}>
      <BoardDetailContent data={data} boardType={QUESTION_BOARD} />
    </div>
  );
};

export default QuestionBoardDetailTemplate;
