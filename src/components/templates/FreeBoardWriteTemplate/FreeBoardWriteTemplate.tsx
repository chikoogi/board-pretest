import styled from "./style.ts";
import BoardWriteContent from "@components/organisms/BoardWriteGrid/Content";
import { FREE_BOARD } from "@src/variables/common-variable.ts";

const FreeBoardWriteTemplate = () => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.contentContainer}>
        <BoardWriteContent boardType={FREE_BOARD} />
      </div>
    </div>
  );
};

export default FreeBoardWriteTemplate;
