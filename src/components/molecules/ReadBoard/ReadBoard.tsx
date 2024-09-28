import styled from "./style.ts";
import { TextareaAutosize, TextField } from "@mui/material";
import Profile from "@components/molecules/Profile";

const ReadBoard = ({ item }: any) => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>{item.title}</div>
      <div css={styled.infoContainer}>
        <div css={styled.profileContainer}>
          <Profile src={item.user.avatar_url} name={item.user.login} />
        </div>
        <div css={styled.createAtContainer}>{item.created_at}</div>
      </div>
      <div css={styled.contentContainer}>{item.body}</div>
    </div>
  );
};

export default ReadBoard;
