import { css } from "@emotion/react";

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  textarea: css`
    padding: 12px;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    resize: none;
    width: 100%;
    height: 400px;
    outline: none;

    ::-webkit-input-placeholder {
      color: rgb(118, 118, 118);
      font-size: 14px;
    }

    &:hover {
      border-color: rgba(0, 0, 0, 0.87);
    }
    &:focus {
      border-color: #1976d2;
    }
  `,
  helper: css`
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    margin: 3px 14px 0 14px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  `,
};
