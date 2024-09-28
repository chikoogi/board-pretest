import Circle from "@components/atoms/Circle";
import { useState } from "react";
import { getDotStyle } from "@src/tools/dot-tool.ts";
import styled from "./style.ts";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const Carousel = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div css={styled.wrapper}>
      <IconButton css={styled.leftBtn} onClick={prevSlide}>
        <ArrowLeft />
      </IconButton>
      <IconButton css={styled.rightBtn} onClick={nextSlide}>
        <ArrowRight />
      </IconButton>
      <div className="carousel-slide-wrapper" css={styled.slideWrapper}>
        <div className="carousel-slides" css={styled.slides(currentIndex)}>
          {images.map((image: string, index: number) => (
            <div className="carousel-slide" key={index} css={styled.slideItem}>
              <img src={image} alt="carousel slide" css={styled.imgWrapper} />
            </div>
          ))}
        </div>
      </div>
      <div css={styled.paginationWrapper}>
        <div css={styled.pagination}>
          {images.map((_: any, i: number) => {
            const dotStyle = getDotStyle({ idx: i, curPage: currentIndex });
            return (
              <div key={i}>
                <Circle
                  color={i === currentIndex ? "#6D6ADA" : "#42424a"}
                  border={i === currentIndex ? "none" : "1px solid #84838d"}
                  onClick={() => {
                    setCurrentIndex(i);
                  }}
                  style={dotStyle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
