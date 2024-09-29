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
  const [modalStack, setModalStack] = useState<ReactNode[]>([]);

  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const location = useLocation();
  const modalKey = Date.now();
  const showModal = (Component: ComponentType<any>, props?: any) => {
    setModalStack((prevStack) => [...prevStack, <Component {...props} key={modalKey} />]);
  };

  const closeModal = () => {
    setModalStack((prevStack) => prevStack.slice(0, -1));
  };

  useEffect(() => {
    // 라우터가 변경될 때 모달을 닫음
    closeModal();
  }, [location]);

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      {modalStack.length > 0 && (
        <Modal isOpen={modalStack.length > 0} onClose={closeModal}>
          {modalStack[modalStack.length - 1]}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};
