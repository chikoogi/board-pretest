import { FREE_BOARD, QUESTION_BOARD } from "@src/variables/common-variable.ts";

export interface updateBoardItemDTO {
  title: string;
  body: string;
}

export interface BoardItemProps {
  id: string;
  nodeId: string;
  boardNum: string;
  createdAt: string;
  title: string;
  description: string;
  userName: string;
  userImageUrl: string;
}

export interface BoardFiltersProps {
  page: number;
  filterType: string;
  searchStr: string;
}

export type BoardType = typeof FREE_BOARD | typeof QUESTION_BOARD;
