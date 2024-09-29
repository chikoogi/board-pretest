import styled from "./style.ts";
import Carousel from "@components/molecules/Carousel/Carousel.tsx";
import { FREE_BOARD, MOCK_IMAGE_LIST, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import BoardPreview from "@components/molecules/BoardPreview/BoardPreview.tsx";
import { useBoardQuery } from "@src/common/queries/queries.ts";

const HomeContent = () => {
  const { query } = useBoardQuery();

  const { data, isLoading } = query.getIssuesFromBoard();

  if (!data) return;
  return (
    <div css={styled.wrapper}>
      <div css={styled.carouselWrapper}>
        <Carousel images={MOCK_IMAGE_LIST} />
      </div>
      <div css={styled.boardWrapper}>
        {isLoading && <>isLoading...</>}
        <div css={styled.boardItem}>
          <BoardPreview data={data.questionBoard} boardType={QUESTION_BOARD} />
        </div>
        <div css={styled.boardItem}>
          <BoardPreview data={data.freeBoard} boardType={FREE_BOARD} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
