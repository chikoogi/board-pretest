import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    //height: 100%;
  `,
  topContainer: css``,
  titleContainer: css`
    padding: 20px 0;
    //height: 100px;
    min-height: 120px;
  `,
  descriptionContainer: css`
    min-height: 400px;
  `,
  label: css`
    margin-bottom: 4px;
    color: #333;
    font-size: 13px;
    font-weight: 500;
  `,
  actionContainer: css`
    display: flex;
    justify-content: end;
    align-items: center;
  `,
};
