import { ReactNode, Suspense } from "react";
import LoadingDot from "@components/atoms/LoadingDot/LoadingDot.tsx";

const LoadingPage = ({ size, page }: { page: ReactNode; size?: number }) => (
  <Suspense fallback={<LoadingDot />}>{page}</Suspense>
);

export default LoadingPage;
