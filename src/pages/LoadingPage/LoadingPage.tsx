import { ReactNode, Suspense } from "react";

const LoadingPage = ({ size, page }: { page: ReactNode; size?: number }) => (
  <Suspense
    fallback={
      <div
        style={{
          display: "flex",
          flex: "1 1 auto",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    }
  >
    {page}
  </Suspense>
);

export default LoadingPage;
