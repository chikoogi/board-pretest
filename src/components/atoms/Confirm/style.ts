import { css } from "@emotion/react";

export default {
  wrapper: css`
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
  `,
  titleContainer: css`
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 20px;
  `,
  messageContainer: css`
    margin-bottom: 20px;
  `,
  actionContainer: css`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
  `,
};
