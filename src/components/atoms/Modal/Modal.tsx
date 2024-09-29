import styled from "./style.ts";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Close } from "@mui/icons-material";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when the modal is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setMounted(true); // 컴포넌트가 브라우저에서 마운트되었는지 확인
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;
  return createPortal(
    <div css={styled.wrapper}>
      <div css={styled.backWrapper}></div>
      <div css={styled.subWrapper}>
        <div css={styled.childrenWrapper}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
