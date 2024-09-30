import styled from "./style.ts";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { BoardItemProps, updateBoardItemDTO } from "@src/interfaces/common-interface.ts";

const InputBoard = <T extends BoardItemProps>({
  item,
  handleApply,
  handleDirty,
}: {
  item?: T;
  handleDirty: (d: boolean) => void;
  handleApply: (dataSet: updateBoardItemDTO) => void;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isDesValid, setIsDesValid] = useState(false);

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, [item]);

  return (
    <div css={styled.wrapper}>
      <div css={styled.titleContainer}>
        <TextField
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
            const dataSet: updateBoardItemDTO = {
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
