import { css } from "@emotion/react";

const BOARD_HEIGHT = 400;
export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  carouselWrapper: css`
    width: 100%;
    height: calc(100% - ${BOARD_HEIGHT}px);
  `,
  boardWrapper: css`
    width: 100%;
    height: ${BOARD_HEIGHT}px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `,
  boardItem: css`
    width: 100%;
    height: 100%;
  `,
};
