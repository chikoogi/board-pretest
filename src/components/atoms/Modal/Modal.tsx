import styled from "./style.ts";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Close } from "@mui/icons-material";
import FocusTrap from "@components/atoms/FocusTrap";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const currentFocusIndex = useRef(-1);

  useEffect(() => {
    /*    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalRef.current) {
        console.log(modalRef.current);

        const focusableElements = modalRef.current.querySelectorAll(
          "a[href], button, textarea, input, select"
        );

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        console.log(document.activeElement, focusableElements);

        if (e.key === "Tab") {
          // Shift + Tab: 첫 번째 요소에서 마지막 요소로 이동
          if (e.shiftKey) {
            if (document.activeElement !== firstElement) return;
            console.log("shift");
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey) {
            console.log(document.activeElement !== lastElement);
            if (document.activeElement !== lastElement) return;
            console.log("!shift");
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };*/

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
    <FocusTrap>
      <div css={styled.wrapper}>
        <div css={styled.backWrapper} />
        <div css={styled.subWrapper}>
          <div css={styled.childrenWrapper}>{children}</div>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById("modal-root") as HTMLElement
  );
  /*  return (
    <FocusTrap>
      <div css={styled.wrapper}>
        <div css={styled.backWrapper} />
        <div css={styled.subWrapper}>
          <div css={styled.childrenWrapper}>{children}</div>
        </div>
      </div>
    </FocusTrap>
  );*/
};

export default Modal;
