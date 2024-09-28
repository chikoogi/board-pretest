import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
  `,
  headerWrapper: css`
    background-color: #333;
  `,
  navWrapper: css`
    background-color: #333;
    padding: 10px;
    width: 100%;
    height: 100px;
  `,
  ulWrapper: css`
    display: flex;
    justify-content: center;
    list-style-type: none;
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
