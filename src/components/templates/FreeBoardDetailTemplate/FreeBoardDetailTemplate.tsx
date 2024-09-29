import styled from "./style.ts";
import BoardDetailContent from "@components/organisms/BoardDetailGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { useParams } from "react-router-dom";
import { FREE_BOARD } from "@src/variables/common-variable.ts";

const FreeBoardDetailTemplate = () => {
  const { id } = useParams();

  const { query } = useBoardQuery();

  const { data, isLoading } = query.getIssuesDetailFromFreeBoard(id);

  if (isLoading) {
    return <>isLoading...</>;
  }
  return (
    <div css={styled.wrapper}>
      <BoardDetailContent data={data} boardType={FREE_BOARD} />
    </div>
  );
};

export default FreeBoardDetailTemplate;
