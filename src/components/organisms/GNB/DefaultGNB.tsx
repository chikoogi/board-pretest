import { Link, useLocation } from "react-router-dom";
import styled from "./style.ts";

const NAVIGATE_LIST = [
  { name: "홈", path: "/home" },
  { name: "자유 게시판", path: "/freeBoard" },
  { name: "질문 게시판", path: "/questionBoard" },
];

const DefaultGNB = () => {
  const location = useLocation();
  const currentPage =
    NAVIGATE_LIST.find((n) => location.pathname === n.path)?.name || "페이지 없음";

  return (
    <div css={styled.wrapper}>
      <div css={styled.headerWrapper}>{currentPage}</div>
      <nav className="default-gnb-wrapper" css={styled.navWrapper}>
        <div css={styled.ulWrapper}>
          {NAVIGATE_LIST.map((n) => (
            <div css={styled.liWrapper} key={n.name}>
              <Link to={n.path} className="gnb-link" css={styled.LinkWrapper}>
                {n.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default DefaultGNB;
