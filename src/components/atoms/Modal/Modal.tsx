import styled from "./style.ts";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "@components/atoms/FocusTrap";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen && mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, mounted]);

  useEffect(() => {
    setMounted(true); // 컴포넌트가 브라우저에서 마운트되었는지 확인
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;
  return createPortal(
    <FocusTrap isOpen={isOpen}>
      <div css={styled.wrapper}>
        <div css={styled.backWrapper} />
        <div css={styled.subWrapper}>
          <div css={styled.childrenWrapper}>{children}</div>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
