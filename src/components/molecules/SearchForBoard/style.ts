import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  leftContainer: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  `,
  rightContainer: css``,
  adornment: css`
    right: 0;
    position: absolute;
  `,
  textFieldWrapper: css`
    .MuiInputBase-root {
      padding-right: 30px;
    }
  `,
};
