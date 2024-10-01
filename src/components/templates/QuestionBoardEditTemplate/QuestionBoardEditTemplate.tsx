import { useBoardQuery } from "@src/common/queries/queries.ts";
import { QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useParams } from "react-router-dom";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";
import BoardEditContent from "@components/organisms/BoardEditGrid/Content";
import { useBoard } from "@src/provider/BoardProvider.tsx";
import { useEffect } from "react";
import LoadingDot from "@components/atoms/LoadingDot/LoadingDot.tsx";
import ErrorPage from "@src/pages/ErrorPage/ErrorPage.tsx";

const QuestionBoardEditTemplate = () => {
  const { selectedBoard, handleSelect } = useBoard();

  const { id } = useParams();
  const { query } = useBoardQuery();
  const { data, isLoading, isError, error } = query.getIssuesDetailFromQuestionBoard(
    id,
    Boolean(!selectedBoard)
  );

  useEffect(() => {
    if (data) {
      handleSelect({
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

  if (isLoading) {
    return <LoadingDot />;
  }
  if (isError) return <ErrorPage error={error} />;
  if (!selectedBoard) return;
  return (
    <div css={styled.wrapper}>
      <div css={styled.contentContainer}>
        <BoardEditContent boardType={QUESTION_BOARD} item={selectedBoard} enableDirty={true} />
      </div>
    </div>
  );
};

export default QuestionBoardEditTemplate;
