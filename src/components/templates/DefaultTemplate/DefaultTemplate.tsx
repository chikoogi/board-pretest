import { Outlet } from "react-router-dom";
import DefaultGNB from "@components/organisms/GNB";
import styled from "./style.ts";

const DefaultTemplate = () => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.gnbContainer}>
        <DefaultGNB />
      </div>
      <div css={styled.contentContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultTemplate;
