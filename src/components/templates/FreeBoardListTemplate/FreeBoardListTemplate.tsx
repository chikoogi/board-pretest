import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useParams } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useState } from "react";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";

const FreeBoardListTemplate = () => {
  const { query } = useBoardQuery();
  const [filters, setFilters] = useState({ page: 1, filterType: "title", searchStr: "" });

  const handleSearch = (newFilters: any) => {
    setFilters((prev) => ({ ...prev, ...newFilters })); // 필터 값 업데이트
  };

  const handleChangePage = (page: number) => {
    setFilters((prev) => ({
      ...prev,
      page: page,
    }));
  };

  const { data, isLoading } = query.getIssuesFromFreeBoard(filters);

  if (isLoading) {
    return <>isLoading...</>;
  }
  return (
    <div css={styled.wrapper}>
      <BoardListContent
        data={data}
        filters={filters}
        boardType={FREE_BOARD}
        onSearch={handleSearch}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

export default FreeBoardListTemplate;
