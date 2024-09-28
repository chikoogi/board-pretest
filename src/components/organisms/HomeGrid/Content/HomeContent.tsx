import styled from "./style.ts";
import Carousel from "@components/molecules/Carousel/Carousel.tsx";
import { MOCK_IMAGE_LIST } from "@src/variables/common-variable.ts";
import BoardPreview from "@components/molecules/BoardPreview/BoardPreview.tsx";

const HomeContent = () => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.carouselWrapper}>
        <Carousel images={MOCK_IMAGE_LIST} />
      </div>
      <div css={styled.boardWrapper}>
        <div css={styled.boardItem}>
          <BoardPreview />
        </div>
        <div>
          <BoardPreview />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
