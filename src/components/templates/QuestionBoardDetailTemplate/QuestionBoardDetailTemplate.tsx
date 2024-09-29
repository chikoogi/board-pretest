import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useParams } from "react-router-dom";

const QuestionBoardDetailTemplate = () => {
  const { id } = useParams();

  const { query } = useBoardQuery();

  const { data, isLoading } = query.getIssuesDetailFromQuestionBoard(id);

  if (isLoading) {
    return <>isLoading...</>;
  }
  return (
    <div>
      <BoardListContent data={data} boardType={QUESTION_BOARD} />
    </div>
  );
};

export default QuestionBoardDetailTemplate;
