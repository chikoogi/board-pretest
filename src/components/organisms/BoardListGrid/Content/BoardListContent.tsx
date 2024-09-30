import styled from "./style.ts";
import SearchForBoard from "@components/molecules/SearchForBoard";
import TableForBoard from "@components/molecules/TableForBoard";
import { useEffect, useState } from "react";
import Pagination from "@components/atoms/Pagination/Pagination.tsx";
import { PER_PAGE } from "@src/common/queries/queries.ts";

const BoardListContent = ({ data, boardType, onSearch, onChangePage, filters }: any) => {
  const [totalRows, setTotalRows] = useState<number>(0);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setTotalRows(data.total_count);
      setRows(data.items);
    }
  }, [data]);

  return (
    <div css={styled.wrapper}>
      <div css={styled.searchContainer}>
        <SearchForBoard boardType={boardType} onSearch={onSearch} filters={filters} />
      </div>
      <div css={styled.tableContainer}>
        <TableForBoard rows={rows} />
      </div>

      {rows.length !== 0 && (
        <div css={styled.paginationContainer}>
          <Pagination
            totalItems={totalRows}
            itemsPerPage={PER_PAGE}
            onPageChange={onChangePage}
            currentPage={filters.page}
          />
        </div>
      )}
    </div>
  );
};

export default BoardListContent;
