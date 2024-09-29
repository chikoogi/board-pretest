import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useParams } from "react-router-dom";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";
import BoardDetailContent from "@components/organisms/BoardDetailGrid/Content";
import BoardEditContent from "@components/organisms/BoardEditGrid/Content";

const QuestionBoardListTemplate = () => {
  const { query } = useBoardQuery();

  const { data, isLoading } = query.getIssuesFromQuestionBoard();

  console.log(data);

  if (isLoading) {
    return <>isLoading...</>;
  }
  return (
    <div>
      <BoardListContent data={data} boardType={QUESTION_BOARD} />
    </div>
  );
};

export default QuestionBoardListTemplate;
