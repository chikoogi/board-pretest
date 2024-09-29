import styled from "./style.ts";
import { ReactNode } from "react";
import { Button } from "@mui/material";

const Confirm = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmLabel = "확인", // 기본값
  cancelLabel = "취소", // 기본값
}: {
  title?: ReactNode;
  message: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}) => {
  return (
    <div css={styled.wrapper}>
      {title && <div css={styled.titleContainer}>{title}</div>}
      <p css={styled.messageContainer}>{message}</p>
      <div css={styled.actionContainer}>
        <Button onClick={onCancel}>{cancelLabel}</Button>
        <Button
          onClick={() => {
            onConfirm();
            // onCancel();
          }}
        >
          {confirmLabel}
        </Button>
      </div>
    </div>
  );
};

export default Confirm;
