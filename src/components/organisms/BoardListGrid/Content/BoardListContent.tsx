import styled from "./style.ts";
import SearchForBoard from "@components/molecules/SearchForBoard";
import TableForBoard from "@components/molecules/TableForBoard";
import { useEffect, useState } from "react";
import Pagination from "@components/atoms/Pagination/Pagination.tsx";
import { PER_PAGE } from "@src/common/queries/queries.ts";
import LoadingDot from "@components/atoms/LoadingDot/LoadingDot.tsx";
import { BoardFiltersProps, BoardItemProps } from "@src/interfaces/common-interface.ts";

const BoardListContent = ({
  data,
  onSearch,
  onResetSearch,
  onChangePage,
  filters,
  isLoading,
}: {
  data: any;
  onSearch: (newFilters: Pick<BoardFiltersProps, "filterType" | "searchStr">) => void;
  onResetSearch: () => void;
  onChangePage: (page: BoardFiltersProps["page"]) => void;
  filters: BoardFiltersProps;
  isLoading: boolean;
}) => {
  const [totalRows, setTotalRows] = useState<number>(0);
  const [rows, setRows] = useState<BoardItemProps[]>([]);

  useEffect(() => {
    if (data) {
      setTotalRows(data.total_count);
      const items: BoardItemProps[] = data.items.map((v: any) => ({
        id: v.id,
        nodeId: v.node_id,
        boardNum: v.number,
        createdAt: v.created_at,
        title: v.title,
        description: v.body,
        userImageUrl: v.user.avatar_url,
        userName: v.user.login,
      }));
      setRows(items);
    }
  }, [data]);

  return (
    <div css={styled.wrapper}>
      <div css={styled.searchContainer}>
        <SearchForBoard onSearch={onSearch} filters={filters} onResetSearch={onResetSearch} />
      </div>
      {isLoading && <LoadingDot />}
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
};

export default BoardListContent;
