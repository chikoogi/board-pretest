import styled from "./style.ts";
import Profile from "@components/molecules/Profile";
import { getYYYYMMDDFormat } from "@src/tools/common-tool.ts";
import { BoardItemProps } from "@src/interfaces/common-interface.ts";

const ReadBoard = ({ item }: { item: BoardItemProps }) => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>{item.title}</div>
      <div css={styled.infoContainer}>
        <div css={styled.profileContainer}>
          <Profile src={item.userImageUrl} name={item.userName} />
        </div>
        <div css={styled.createAtContainer}>
          {getYYYYMMDDFormat(new Date(item.createdAt), "hyphen", true)}
        </div>
      </div>
      <div css={styled.contentContainer}>{item.description}</div>
    </div>
  );
};

export default ReadBoard;
