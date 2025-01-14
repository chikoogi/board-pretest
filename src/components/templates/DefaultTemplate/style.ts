import { css } from "@emotion/react";

const GNB_HEIGHT = 70;
export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  gnbContainer: css`
    width: 100%;
    height: ${GNB_HEIGHT}px;
  `,
  contentContainer: css`
    width: 100%;
    height: calc(100% - ${GNB_HEIGHT}px);
    padding: 30px 300px;
  `,
};
