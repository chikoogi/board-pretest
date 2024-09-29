import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  title: css`
    width: 100%;
    height: 30px;
  `,
  listContainer: css`
    width: 100%;
    height: calc(100% - 30px);
  `,
  rowContainer: css`
    width: 100%;
    display: flex;
    align-items: center;
    div:nth-of-type(1) {
      width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    div:nth-of-type(2) {
      width: 30%;
    }
  `,
  emptyContainer: css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ListItemBtnWrapper: css`
    div:nth-of-type(1) {
      width: 80%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    div:nth-of-type(2) {
      width: 20%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `,
};
