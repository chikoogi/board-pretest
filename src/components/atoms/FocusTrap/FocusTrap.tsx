import { useEffect, useRef } from "react";

const focusableElementsContains = (
  activeElement: Element | null,
  elements: NodeListOf<HTMLElement>
) => {
  return Array.from(elements).includes(activeElement as HTMLElement);
};

const FocusTrap = ({ isOpen, children }: any) => {
  const modalRef = useRef(null);
  const previousFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          "a[href], button, textarea, input, select"
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (!focusableElementsContains(document.activeElement, focusableElements)) {
          firstElement.focus();
          e.preventDefault();
        } else if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    if (isOpen) {
      previousFocusedElement.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocusedElement.current) {
        previousFocusedElement.current.focus();
      }
    };
  }, [isOpen]);

  return <div ref={modalRef}>{children}</div>;
};

export default FocusTrap;
