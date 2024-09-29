import {
  ComponentType,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Modal from "@components/atoms/Modal";
import { useLocation } from "react-router-dom";

interface ModalContextType {
  showModal: (Component: ComponentType<any>, props?: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const location = useLocation();

  const showModal = (Component: ComponentType<any>, props?: any) => {
    setModalContent(<Component {...props} />);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useEffect(() => {
    // 라우터가 변경될 때 모달을 닫음
    closeModal();
  }, [location]);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modalContent && (
        <Modal isOpen={Boolean(modalContent)} onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};
