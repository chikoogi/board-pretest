import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
  headerWrapper: css`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #121212;
    padding: 0 12px;
  `,
  navWrapper: css`
    background-color: #333;
    padding: 10px;
    width: 100%;
    height: calc(100% - 30px);
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
  `,
  LinkWrapper: css`
    color: #fff;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #555;
      border-radius: 5px;
    }
  `,
};
