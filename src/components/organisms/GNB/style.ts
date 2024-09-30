import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  navWrapper: css`
    background-color: #fff;
    color: #121212;
    padding: 10px;
    width: 100%;
    height: calc(100%);
    border-bottom: 1px solid #e8eaee;
  `,
  ulWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  `,
  liWrapper: css`
    margin: 0 10px;
    .link {
      padding: 10px 20px;
      border-radius: 5px;
      transition: background-color 0.3s;
      color: #121212;
      text-decoration: none;
      font-size: 18px;
      &:hover {
        color: #6c757d;
      }
    }
    .link.active {
      color: #006bd6;
    }
  `,
  LinkWrapper: css``,
};
