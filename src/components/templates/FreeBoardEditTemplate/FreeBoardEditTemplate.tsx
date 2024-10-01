import styled from "./style.ts";
import { FREE_BOARD } from "@src/variables/common-variable.ts";
import BoardEditContent from "@components/organisms/BoardEditGrid/Content";
import { useBoard } from "@src/provider/BoardProvider.tsx";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingDot from "@components/atoms/LoadingDot/LoadingDot.tsx";

const FreeBoardEditTemplate = () => {
  const { selectedBoard, handleSelect } = useBoard();

  const { id } = useParams();
  const { query } = useBoardQuery();
  const { data, isLoading } = query.getIssuesDetailFromFreeBoard(id, Boolean(!selectedBoard));

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
  if (!selectedBoard) return;
  return (
    <div css={styled.wrapper}>
      <div css={styled.contentContainer}>
        <BoardEditContent boardType={FREE_BOARD} item={selectedBoard} enableDirty={true} />
      </div>
    </div>
  );
};

export default FreeBoardEditTemplate;
