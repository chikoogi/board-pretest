import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { DEFAULT_FILTERS, FREE_BOARD } from "@src/variables/common-variable.ts";
import { useState } from "react";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";
import { BoardFiltersProps } from "@src/interfaces/common-interface.ts";
import ErrorPage from "@src/pages/ErrorPage/ErrorPage.tsx";

const FreeBoardListTemplate = () => {
  const { query } = useBoardQuery();
  const [filters, setFilters] = useState<BoardFiltersProps>(DEFAULT_FILTERS);

  const handleSearch = (newFilters: Pick<BoardFiltersProps, "filterType" | "searchStr">) => {
    setFilters((prev) => ({ page: 1, ...newFilters })); // 필터 값 업데이트
  };

  const handleResetSearch = () => setFilters(DEFAULT_FILTERS);

  const handleChangePage = (page: BoardFiltersProps["page"]) => {
    setFilters((prev) => ({
      ...prev,
      page: page,
    }));
  };

  const { data, isLoading, isError, error } = query.getIssuesFromFreeBoard(filters);
  if (isError) return <ErrorPage error={error} />;

  return (
    <div css={styled.wrapper}>
      <BoardListContent
        isLoading={isLoading}
        data={data}
        filters={filters}
        onSearch={handleSearch}
        onResetSearch={handleResetSearch}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

export default FreeBoardListTemplate;
