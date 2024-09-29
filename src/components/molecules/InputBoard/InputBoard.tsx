import styled from "./style.ts";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TextAreaStyledA from "@components/atoms/TextAreaStyledA/TextAreaStyledA.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useBoardQuery } from "@src/common/queries/queries.ts";
import { FREE_BOARD } from "@src/variables/common-variable.ts";

const InputBoard = ({ item, handleApply, handleDirty }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.body);
    }
  }, [item]);

  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>
        <TextField
          placeholder={"제목"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            handleDirty(true);
          }}
          fullWidth
          autoFocus
        />
      </div>
      <div css={styled.descriptionContainer}>
        <TextAreaStyledA
          placeholder={"내용"}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            handleDirty(true);
          }}
        />
      </div>
      <div css={styled.actionContainer}>
        <Button
          onClick={() => {
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
