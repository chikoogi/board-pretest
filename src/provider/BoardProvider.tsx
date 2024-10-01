import { BoardItemProps } from "@src/interfaces/common-interface.ts";
import { createContext, ReactNode, useContext, useState } from "react";

interface BoardContextType {
  selectedBoard?: BoardItemProps;
  handleSelect: (b: BoardItemProps) => void;
  clearSelect: () => void;
}

const BoardContext = createContext<BoardContextType | undefined>(undefined);

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoard must be used within a BoardProvider");
  }
  return context;
};

export const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [selectedBoard, setSelectedBoard] = useState<BoardItemProps | undefined>(undefined);

  const handleSelect = (b: BoardItemProps) => {
    setSelectedBoard({ ...b });
  };

  const clearSelect = () => setSelectedBoard(undefined);

  return (
    <BoardContext.Provider
      value={{
        selectedBoard,
        handleSelect,
        clearSelect,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
