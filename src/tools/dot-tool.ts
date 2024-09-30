import { CSSProperties } from "react";

enum EnumDotType {
  ACTIVE,
  INACTIVE,
  MEDIUM,
  SMALL,
  NONE,
}

const DotStyle = {
  [EnumDotType.INACTIVE]: {
    width: 12,
    height: 12,
    transform: "scale(1)",
  },
  [EnumDotType.ACTIVE]: {
    width: 12,
    height: 12,
    borderRadius: 6,
    transform: "scale(1)",
  },
  [EnumDotType.MEDIUM]: {
    width: 8,
    height: 8,
    transform: "scale(0.75)",
  },
  [EnumDotType.SMALL]: {
    width: 5,
    height: 5,
    transform: "scale(0.25)",
  },
  [EnumDotType.NONE]: {
    width: 0,
    height: 0,
    transform: "scale(0)",
  },
};

export const getDotStyle = ({ idx, curPage }: { idx: number; curPage: number }): CSSProperties => {
  let type = EnumDotType.SMALL;
  if (idx === curPage) {
    type = EnumDotType.ACTIVE;
  } else {
    type = EnumDotType.INACTIVE;
  }
  return DotStyle[type];
};
