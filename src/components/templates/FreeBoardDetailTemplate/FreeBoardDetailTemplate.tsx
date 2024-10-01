import styled from "./style.ts";
import BoardDetailContent from "@components/organisms/BoardDetailGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { useParams } from "react-router-dom";
import { FREE_BOARD } from "@src/variables/common-variable.ts";
import LoadingDot from "@components/atoms/LoadingDot/LoadingDot.tsx";
import { useBoard } from "@src/provider/BoardProvider.tsx";
import { useEffect } from "react";
import ErrorPage from "@src/pages/ErrorPage/ErrorPage.tsx";

const FreeBoardDetailTemplate = () => {
  const { id } = useParams();
  const { query } = useBoardQuery();
  const { data, isLoading, isError, error } = query.getIssuesDetailFromFreeBoard(id);
  const { selectedBoard, handleSelect } = useBoard();

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
      <BoardDetailContent item={selectedBoard} boardType={FREE_BOARD} />
    </div>
  );
};

export default FreeBoardDetailTemplate;
