import { Outlet } from "react-router-dom";
import DefaultGNB from "@components/organisms/GNB";
import styled from "./style.ts";
import { ModalProvider } from "@src/provider/ModalProvider.tsx";

const DefaultTemplate = () => {
  return (
    <ModalProvider>
      <div css={styled.wrapper}>
        <div css={styled.gnbContainer}>
          <DefaultGNB />
        </div>
        <div css={styled.contentContainer}>
          <Outlet />
        </div>
      </div>
    </ModalProvider>
  );
};

export default DefaultTemplate;
