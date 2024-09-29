import styled from "./style.ts";

const Alert = ({
  message,
  onClose,
  confirmLabel = "확인",
}: {
  message: string;
  onClose: () => void;
  confirmLabel?: string;
}) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onClose}>{confirmLabel}</button>
    </div>
  );
};
export default Alert;
