import styled from "./style.ts";
import { TextareaAutosize, TextField } from "@mui/material";
import Profile from "@components/molecules/Profile";
import { getYYYYMMDDFormat } from "@src/tools/common-tool.ts";

const ReadBoard = ({ item }: any) => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>{item.title}</div>
      <div css={styled.infoContainer}>
        <div css={styled.profileContainer}>
          <Profile src={item.user.avatar_url} name={item.user.login} />
        </div>
        <div css={styled.createAtContainer}>
          {getYYYYMMDDFormat(new Date(item.created_at), "hyphen", true)}
        </div>
      </div>
      <div css={styled.contentContainer}>{item.body}</div>
    </div>
  );
};

export default ReadBoard;
