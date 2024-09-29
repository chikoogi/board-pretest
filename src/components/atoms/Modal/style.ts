import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  backWrapper: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.4;
    background-color: #000;
  `,
  subWrapper: css`
    //background-color: #fff;
    //padding: 10px;
    position: relative;
  `,
  childrenWrapper: css`
    width: 100%;
    height: 100%;
  `,
};
