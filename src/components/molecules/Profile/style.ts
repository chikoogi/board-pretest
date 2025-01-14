import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  subWrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    //justify-content: center;
    align-items: center;
    gap: 5px;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `,
  imgWrapper: css`
    width: 30px;
    border-radius: 50%;
  `,
};
