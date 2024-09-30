import BoardListContent from "@components/organisms/BoardListGrid/Content";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";
import { useParams } from "react-router-dom";
import styled from "@components/templates/FreeBoardDetailTemplate/style.ts";
import BoardDetailContent from "@components/organisms/BoardDetailGrid/Content";
import BoardEditContent from "@components/organisms/BoardEditGrid/Content";
import { useState } from "react";
import LoadingDot from "@components/atoms/LoadingDot/LoadingDot.tsx";

const QuestionBoardListTemplate = () => {
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

  const { data, isLoading } = query.getIssuesFromQuestionBoard(filters);

  return (
    <div css={styled.wrapper}>
      <BoardListContent
        isLoading={isLoading}
        data={data}
        filters={filters}
        boardType={QUESTION_BOARD}
        onSearch={handleSearch}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

export default QuestionBoardListTemplate;
