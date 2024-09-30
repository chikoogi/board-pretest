import { lazy } from "react";
import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";

const LoadingPage = lazy(() => import("@src/pages/LoadingPage"));
const DefaultTemplate = lazy(() => import("@src/components/templates/DefaultTemplate"));
const TotalHomePage = lazy(() => import("@src/pages/TotalHomePage"));
const FreeBoardListPage = lazy(() => import("@src/pages/FreeBoardListPage/FreeBoardListPage.tsx"));
const FreeBoardDetailPage = lazy(
  () => import("@src/pages/FreeBoardDetailPage/FreeBoardDetailPage.tsx")
);
const FreeBoardEditPage = lazy(() => import("@src/pages/FreeBoardEditPage/FreeBoardEditPage.tsx"));
const FreeBoardWritePage = lazy(
  () => import("@src/pages/FreeBoardWritePage/FreeBoardWritePage.tsx")
);
const QuestionBoardListPage = lazy(
  () => import("@src/pages/QuestionBoardListPage/QuestionBoardListPage.tsx")
);
const QuestionBoardWritePage = lazy(
  () => import("@src/pages/QuestionBoardWritePage/QuestionBoardWritePage.tsx")
);
const QuestionBoardDetailPage = lazy(
  () => import("@src/pages/QuestionBoardDetailPage/QuestionBoardDetailPage.tsx")
);
const QuestionBoardEditPage = lazy(
  () => import("@src/pages/QuestionBoardEditPage/QuestionBoardEditPage.tsx")
);

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
