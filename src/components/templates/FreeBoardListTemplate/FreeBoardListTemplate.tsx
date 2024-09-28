import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useParams } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";

const FreeBoardListTemplate = () => {
  const { boardType } = useParams();
  const { query } = useBoardQuery();

  const { data, isLoading } = query.getIssuesFromFreeBoard();

  console.log(data);

  if (isLoading) {
    return <>isLoading...</>;
  }
  return (
    <div>
      <BoardListContent data={data} boardType={FREE_BOARD} />
    </div>
  );
};

export default FreeBoardListTemplate;
