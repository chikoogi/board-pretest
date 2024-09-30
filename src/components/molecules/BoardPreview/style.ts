import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
    border: 1px solid #121212;
    padding: 12px 10px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 12px;
    //justify-content: start;
    //align-items: start;
  `,
  title: css`
    width: 100%;
    height: 30px;
    font-weight: 500;
    font-size: 1.25rem;
  `,
  listContainer: css`
    width: 100%;
    height: calc(100% - 30px);
    //display: flex;
    //justify-content: center;
    //align-items: start;
  `,
  listSubContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 200px;
  `,
  rowContainer: css`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    div:nth-of-type(1) {
      width: calc(100% - 40px);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    div:nth-of-type(2) {
      width: 150px;
      display: flex;
      justify-content: end;
      align-items: center;
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
