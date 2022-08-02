import { useWeb3 } from "../../context/web3Context";
import * as S from "./styles";
import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";

export const Profile = ({ data }: any) => {
  const { account } = useWeb3();

  const handleEdit = () => {};

  return (
    <S.Container>
      <S.BannerContainer>
        <S.AvatarContainer>
          <S.EditIcon onClick={handleEdit}>
            <FiEdit2 size={30} />
          </S.EditIcon>
          <Image
            src={"/img/default.png"}
            width={150}
            height={150}
            alt="Github default icon"
          />
        </S.AvatarContainer>
      </S.BannerContainer>
      <S.Info>
        <S.Wrapper>
          <S.Username>Username</S.Username>
          <S.Address>{account}</S.Address>
        </S.Wrapper>
        <S.EditButton>
          <FiEdit2 size={30} />
        </S.EditButton>
      </S.Info>
    </S.Container>
  );
};
