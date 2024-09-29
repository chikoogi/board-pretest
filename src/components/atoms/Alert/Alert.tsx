import styled from "./style.ts";
import { ReactNode } from "react";
import { Button } from "@mui/material";

const Alert = ({
  message,
  onClose,
  confirmLabel = "확인",
}: {
  message: ReactNode;
  onClose: () => void;
  confirmLabel?: string;
}) => {
  return (
    <div css={styled.wrapper}>
      <p css={styled.messageContainer}>{message}</p>
      <div css={styled.actionContainer}>
        <Button onClick={onClose}>{confirmLabel}</Button>
      </div>
    </div>
  );
};
export default Alert;
