import styled from "./style.ts";
import { FREE_BOARD } from "@src/variables/common-variable.ts";
import BoardEditContent from "@components/organisms/BoardEditGrid/Content";
import { useBoard } from "@src/provider/BoardProvider.tsx";

const FreeBoardEditTemplate = () => {
  const { selectedBoard } = useBoard();

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
