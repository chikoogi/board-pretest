import styled from "./style.ts";

const Confirm = ({
  message,
  onConfirm,
  onCancel,
  confirmLabel = "확인", // 기본값
  cancelLabel = "취소", // 기본값
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onConfirm}>{confirmLabel}</button>
      <button onClick={onCancel}>{cancelLabel}</button>
    </div>
  );
};

export default Confirm;
