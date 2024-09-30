import HomeContent from "@components/organisms/HomeGrid/Content";
import styled from "./style.ts";
const HomeTemplate = () => {
  return (
    <div css={styled.wrapper}>
      <HomeContent />
    </div>
  );
};

export default HomeTemplate;
