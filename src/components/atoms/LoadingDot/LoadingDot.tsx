import styled from "./style";

const LoadingDot = ({ height = "100%" }: { height?: string }) => {
  return (
    <div css={styled.wrapper(height)}>
      <div className="bouncing-loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingDot;
