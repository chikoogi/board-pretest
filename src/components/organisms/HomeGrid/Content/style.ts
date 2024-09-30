import { css } from "@emotion/react";

const BOARD_HEIGHT = 300;
export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  carouselWrapper: css`
    width: 100%;
    height: calc(100% - ${BOARD_HEIGHT}px);
    min-height: 450px;
    margin-bottom: 30px;
  `,
  boardWrapper: css`
    width: 100%;
    height: ${BOARD_HEIGHT}px;
    display: grid;
    grid-template-columns: repeat(2, minmax(auto, 50%));
    grid-template-rows: 1fr;
    column-gap: 10px;
  `,
  boardItem: css`
    width: 100%;
    height: 100%;
  `,
};
