import Circle from "@components/atoms/Circle";
import { useRef, useState } from "react";
import { getDotStyle } from "@src/tools/dot-tool.ts";
import styled from "./style.ts";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const prevSlide = () => {
    if (isTransitioning) return; // 트랜지션 중 중복 호출 방지
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (isTransitioning) return; // 트랜지션 중 중복 호출 방지
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // 무한 루프처럼 작동하게 처리
    if (currentIndex === images.length + 1) {
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setCurrentIndex(images.length);
    }
  };

  return (
    <div css={styled.wrapper}>
      <IconButton className="arrow" color={"primary"} css={styled.leftBtn} onClick={prevSlide}>
        <ChevronLeft />
      </IconButton>
      <IconButton className="arrow" css={styled.rightBtn} onClick={nextSlide}>
        <ChevronRight />
      </IconButton>
      <div className="carousel-slide-wrapper" css={styled.slideWrapper}>
        <div
          className="carousel-slides"
          css={styled.slides(currentIndex, isTransitioning)}
          ref={slideRef}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="carousel-slide" css={styled.slideItem}>
            <img
              src={images[images.length - 1]}
              alt="carousel slide"
              css={styled.imgWrapper}
              loading="lazy"
            />
          </div>
          {images.map((image: string, index: number) => (
            <div className="carousel-slide" key={index} css={styled.slideItem}>
              <img src={image} alt="carousel slide" css={styled.imgWrapper} loading="lazy" />
            </div>
          ))}
          <div className="carousel-slide" css={styled.slideItem}>
            <img src={images[0]} alt="carousel slide" css={styled.imgWrapper} loading="lazy" />
          </div>
        </div>
      </div>
      <div css={styled.paginationWrapper}>
        <div css={styled.pagination}>
          {images.map((_: any, i: number) => {
            const dotStyle = getDotStyle({ idx: i, curPage: currentIndex - 1 });
            return (
              <div key={i}>
                <Circle
                  color={i === currentIndex - 1 ? "#6D6ADA" : "#42424a"}
                  border={i === currentIndex - 1 ? "none" : "1px solid #84838d"}
                  onClick={() => {
                    setCurrentIndex(i + 1);
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
