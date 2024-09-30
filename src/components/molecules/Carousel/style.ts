import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
    padding-left: 100px;
    padding-right: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      .arrow {
        visibility: visible;
        &:hover {
          color: #121212;
          border: 1px solid #121212;
        }
      }
    }
  `,
  slideWrapper: css`
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,
  slides: (currentIndex: number, isTransitioning: boolean) => css`
    display: flex;
    transition: ${isTransitioning ? "transform 0.5s ease" : "none"};
    transform: translateX(-${currentIndex * 100}%);
  `,
  slideItem: css`
    width: 100%;
    height: 400px;
    //transition: transform 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex: none;
    object-fit: contain;
  `,
  imgWrapper: css`
    height: 100%;
    object-fit: scale-down;
  `,
  paginationWrapper: css`
    width: 100%;
  `,
  pagination: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  leftBtn: css`
    position: absolute;
    top: 50%;
    left: 40px;
    color: #fff;
    background-color: #333;
    transform: translate3d(0, -50%, 0);
    z-index: 10;

    visibility: hidden;
  `,
  rightBtn: css`
    position: absolute;
    top: 50%;
    right: 40px;
    color: #fff;
    background-color: #121212;
    transform: translate3d(0, -50%, 0);
    z-index: 10;
    visibility: hidden;
  `,
};
