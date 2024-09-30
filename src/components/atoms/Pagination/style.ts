import { css } from "@emotion/react";

export default {
  wrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  pageContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  `,
  btnWrapper: (selected: boolean) => css`
    border-radius: 16px;
    height: 32px;
    min-width: 32px;

    color: ${selected ? "rgb(255, 255, 255)" : ""};
    background-color: ${selected ? "rgb(25, 118, 210)" : ""};
    &:hover {
      background-color: ${selected ? "rgb(123, 31, 162)" : ""};
    }
  `,
};
