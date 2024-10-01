import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { DEFAULT_FILTERS, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";
import { useState } from "react";
import ErrorPage from "@src/pages/ErrorPage/ErrorPage.tsx";

const QuestionBoardListTemplate = () => {
  const { query } = useBoardQuery();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const handleSearch = (newFilters: any) => {
    setFilters((prev) => ({ ...prev, ...newFilters })); // 필터 값 업데이트
  };

  const handleResetSearch = () => setFilters(DEFAULT_FILTERS);

  const handleChangePage = (page: number) => {
    setFilters((prev) => ({
      ...prev,
      page: page,
    }));
  };

  const { data, isLoading, isError, error } = query.getIssuesFromQuestionBoard(filters);

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

export default QuestionBoardListTemplate;
