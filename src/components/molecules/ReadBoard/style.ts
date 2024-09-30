import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  titleContainer: css`
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 500;
  `,
  infoContainer: css`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 20px;
  `,
  profileContainer: css`
    flex: 0 0 200px;
  `,
  createAtContainer: css`
    flex: 1 1;
  `,
  contentContainer: css`
    padding: 20px;
    max-height: 500px;
    overflow: auto;
  `,
};
