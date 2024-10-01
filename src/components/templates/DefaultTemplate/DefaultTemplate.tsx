import { Outlet } from "react-router-dom";
import DefaultGNB from "@components/organisms/GNB";
import styled from "./style.ts";
import { ModalProvider } from "@src/provider/ModalProvider.tsx";
import LoadingPage from "@src/pages/LoadingPage";
import { BoardProvider } from "@src/provider/BoardProvider.tsx";

const DefaultTemplate = () => {
  return (
    <ModalProvider>
      <BoardProvider>
        <div css={styled.wrapper}>
          <div css={styled.gnbContainer}>
            <DefaultGNB />
          </div>
          <LoadingPage>
            <div css={styled.contentContainer}>
              <Outlet />
            </div>
          </LoadingPage>
        </div>
      </BoardProvider>
    </ModalProvider>
  );
};

export default DefaultTemplate;
