import styled from "./style.ts";
import { FREE_BOARD } from "@src/variables/common-variable.ts";
import BoardEditContent from "@components/organisms/BoardEditGrid/Content";
import { useParams } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";

const FreeBoardEditTemplate = () => {
  const { id } = useParams();

  const { query } = useBoardQuery();
  const { data } = query.getIssuesDetailFromFreeBoard(id);

  return (
    <div css={styled.wrapper}>
      <div css={styled.contentContainer}>
        <BoardEditContent boardType={FREE_BOARD} data={data} />
      </div>
    </div>
  );
};

export default FreeBoardEditTemplate;
