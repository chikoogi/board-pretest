import { ReactNode, Suspense } from "react";
import { LinearProgress } from "@mui/material";

const LoadingPage = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<LinearProgress />}>{children}</Suspense>
);

export default LoadingPage;
