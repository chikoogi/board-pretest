import { css } from "@emotion/react";

export default {
  wrapper: css``,
  tableContainer: css``,
  tableWrapper: css`
    table-layout: fixed;
    width: 100%;
    //height: 100%;
    thead {
      tr {
        th {
          text-align: left;
          height: 44px;
          border-bottom: 1px solid #dadce0;
        }
        th:nth-of-type(1) {
          width: 100px;
          text-align: center;
        }
        th:nth-of-type(2) {
          padding-left: 20px;
        }
        th:nth-of-type(3) {
          width: 200px;
          padding-left: 20px;
        }
        th:nth-of-type(4) {
          width: 300px;
          padding-left: 20px;
        }
      }
    }
  `,
  trWrapper: css`
    td {
      height: 44px;
      border-bottom: 1px solid #dadce0;
      padding-left: 20px;
    }
    td:nth-of-type(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      padding: 0;
    }
    td:nth-of-type(2) {
      //width: 300px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  `,
  tbodyWrapper: css``,
  noData: css`
    padding: 20px;
    text-align: center;
    font-size: 20px;
  `,
  avatarWrapper: css`
    width: 30px;
    border-radius: 50%;
  `,
};