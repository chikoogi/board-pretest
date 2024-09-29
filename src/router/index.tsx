import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const LoadingPage = lazy(() => import("@src/pages/LoadingPage"));
const DefaultTemplate = lazy(() => import("@src/components/templates/DefaultTemplate"));
const TotalHomePage = lazy(() => import("@src/pages/TotalHomePage"));
const FreeBoardListPage = lazy(() => import("@src/pages/FreeBoardListPage/FreeBoardListPage.tsx"));
const QuestionBoardPage = lazy(
  () => import("@src/pages/QuestionBoardListPage/QuestionBoardListPage.tsx")
);

import FreeBoardDetailPage from "@src/pages/FreeBoardDetialPage/FreeBoardDetailPage.tsx";
import FreeBoardEditPage from "@src/pages/FreeBoardEditPage/FreeBoardEditPage.tsx";
import FreeBoardWritePage from "@src/pages/FreeBoardWritePage/FreeBoardWritePage.tsx";
import QuestionBoardListPage from "@src/pages/QuestionBoardListPage";
import QuestionBoardWritePage from "@src/pages/QuestionBoardWritePage";
import QuestionBoardDetailPage from "@src/pages/QuestionBoardDetailPage";
import QuestionBoardEditPage from "@src/pages/QuestionBoardEditPage";

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
          { path: "list", element: <FreeBoardListPage /> }, //게시글 목록 페이지
          { path: "write", element: <FreeBoardWritePage /> }, // 게시글 생성 페이지
          { path: "detail/:id", element: <FreeBoardDetailPage /> }, //게시글 상세 페이지
          { path: "edit/:id", element: <FreeBoardEditPage /> }, // 게시글 수정 페이지
        ],
      },
      {
        path: "QuestionBoard",
        children: [
          { index: true, element: <Navigate to={"list"} /> },
          { path: "list", element: <QuestionBoardListPage /> }, //게시글 목록 페이지
          { path: "write", element: <QuestionBoardWritePage /> }, // 게시글 생성 페이지
          { path: "detail/:id", element: <QuestionBoardDetailPage /> }, //게시글 상세 페이지
          { path: "edit/:id", element: <QuestionBoardEditPage /> }, // 게시글 수정 페이지
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routeObjectList);
export default router;
