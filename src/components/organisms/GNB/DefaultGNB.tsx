import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "./style.ts";
import { useEffect } from "react";

const NAVIGATE_LIST = [
  { name: "홈", path: "/home" },
  { name: "질문 게시판", path: "/questionBoard" },
  { name: "자유 게시판", path: "/freeBoard" },
];

const DefaultGNB = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path.includes("home")) {
      document.title = "홈";
    } else if (path.includes("questionBoard") || path.includes("freeBoard")) {
      if (path.includes("write")) {
        document.title = "글쓰기";
      } else if (path.includes("edit")) {
        document.title = "글수정";
      } else {
        document.title = "게시판";
      }
    } else {
      document.title = "-";
    }
  }, [location]);

  return (
    <div css={styled.wrapper}>
      <nav className="default-gnb-wrapper" css={styled.navWrapper}>
        <div css={styled.ulWrapper}>
          {NAVIGATE_LIST.map((n) => (
            <div css={styled.liWrapper} key={n.name}>
              <NavLink
                to={n.path}
                className={({ isActive }) => ["link", isActive ? "active" : ""].join(" ")}
              >
                {n.name}
              </NavLink>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default DefaultGNB;
