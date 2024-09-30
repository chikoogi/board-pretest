import styled from "./style.ts";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TextAreaStyledA from "@components/atoms/TextAreaStyledA/TextAreaStyledA.tsx";

const InputBoard = ({ item, handleApply, handleDirty }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDesValid, setIsDesValid] = useState(false);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.body);
    }
  }, [item]);

  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>
        {/*<div css={styled.label}>제목</div>*/}
        <TextField
          // label={"제목"}
          label={"제목"}
          value={title}
          onChange={(e) => {
            setIsTitleValid(false);
            setTitle(e.target.value);
            handleDirty(true);
          }}
          helperText={isTitleValid ? "제목을 입력해주세요." : ""}
          fullWidth
          focused={isTitleValid}
          error={isTitleValid}
          autoFocus
        />
      </div>
      <div css={styled.descriptionContainer}>
        {/*<div css={styled.label}>내용</div>*/}
        <TextField
          label={"내용"}
          value={description}
          onChange={(e) => {
            setIsDesValid(false);
            setDescription(e.target.value);
            handleDirty(true);
          }}
          fullWidth={true}
          rows={15}
          helperText={isDesValid ? "내용을 입력해주세요." : ""}
          multiline={true}
          error={isTitleValid}
          focused={isDesValid}
        />
      </div>
      <div css={styled.actionContainer}>
        <Button
          variant={"contained"}
          onClick={() => {
            if (title === "" || description === "") {
              if (title === "") {
                setIsTitleValid(true);
              }
              if (description === "") {
                setIsDesValid(true);
              }
              return;
            }
            handleDirty(false);
            const dataSet = {
              title: title,
              body: description,
            };
            handleApply(dataSet);
          }}
        >
          {item ? "수정하기" : "등록하기"}
        </Button>
      </div>
    </div>
  );
};

export default InputBoard;
