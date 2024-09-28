import styled from "./style.ts";

const Profile = ({ src, name }: any) => {
  return (
    <div css={styled.wrapper}>
      <img src={src} alt={name} css={styled.imgWrapper} />
      <span>{name}</span>
    </div>
  );
};

export default Profile;
