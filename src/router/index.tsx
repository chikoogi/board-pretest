import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const LoadingPage = lazy(() => import("@src/pages/LoadingPage"));
const DefaultTemplate = lazy(() => import("@src/components/templates/DefaultTemplate"));
const TotalHomePage = lazy(() => import("@src/pages/TotalHomePage"));
const FreeBoardListPage = lazy(() => import("@src/pages/FreeBoardListPage/FreeBoardListPage.tsx"));
const QuestionBoardPage = lazy(() => import("@src/pages/QuestionBoardPage"));

import FreeBoardDetailPage from "@src/pages/FreeBoardDetialPage/FreeBoardDetailPage.tsx";
import FreeBoardEditPage from "@src/pages/FreeBoardEditPage/FreeBoardEditPage.tsx";
import FreeBoardWritePage from "@src/pages/FreeBoardWritePage/FreeBoardWritePage.tsx";

/* @TODO not found 페이지 필요 */

const routeObjectList: RouteObject[] = [
  {
    path: "/*",
    element: <LoadingPage size={5} page={<DefaultTemplate />} />,
    children: [
      { index: true, element: <Navigate to={"home"} /> },
      {
        path: "home",
        element: <TotalHomePage />,
      },
      {
        path: "freeBoard",
        children: [
          { index: true, element: <Navigate to={"list"} /> },
          { path: "list", element: <FreeBoardListPage /> },
          { path: "detail/:id", element: <FreeBoardDetailPage /> },
          { path: "edit/:id", element: <FreeBoardEditPage /> }, // 게시글 수정 페이지
        ],
      },
      {
        path: "write/:boardType", // boardType 파라미터를 URL에 추가
        element: <FreeBoardWritePage />,
      },
    ],
  },
];

const router = createBrowserRouter(routeObjectList);
export default router;
