const ErrorPage = ({ error }: { error: any }) => {
  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>{error?.message || "An unknown error occurred."}</p>
    </div>
  );
};

export default ErrorPage;
