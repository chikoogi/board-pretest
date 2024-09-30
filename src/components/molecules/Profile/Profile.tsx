import styled from "./style.ts";

const Profile = ({ src, name }: any) => {
  return (
    <div css={styled.wrapper}>
      <div css={styled.subWrapper}>
        <img src={src} alt={name} css={styled.imgWrapper} />
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Profile;
