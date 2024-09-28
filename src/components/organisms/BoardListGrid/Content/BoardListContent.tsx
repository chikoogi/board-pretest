import styled from "./style.ts";
import SearchForBoard from "@components/molecules/SearchForBoard";
import TableForBoard from "@components/molecules/TableForBoard";

const BoardListContent = ({ data = [], boardType }: any) => {
  return (
    <div css={styled.wrapper}>
      <div>
        <SearchForBoard boardType={boardType} />
        <TableForBoard rows={data} />
      </div>
    </div>
  );
};

export default BoardListContent;
