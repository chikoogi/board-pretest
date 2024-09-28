import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  carouselWrapper: css`
    width: 100%;
    height: 500px;
  `,
  boardWrapper: css`
    width: 100%;
    height: calc(100% - 500px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  `,
  boardItem: css`
    width: 100%;
    height: 100%;
  `,
};
