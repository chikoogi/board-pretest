import HomeContent from "@components/organisms/HomeGrid/Content";
import styled from "./style.ts";
import { useBoardQuery } from "@src/common/queries/queries.ts";
const HomeTemplate = () => {
  return (
    <div css={styled.wrapper}>
      <HomeContent />
    </div>
  );
};

export default HomeTemplate;
