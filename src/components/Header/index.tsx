import * as S from "./styles";
import { FaEthereum } from "react-icons/fa";
import { useWeb3 } from "../../context/web3Context";
import { BiWallet } from "react-icons/bi";

const Header = () => {
  const { connect, account } = useWeb3();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <FaEthereum />
          NFTrade
        </S.Logo>
        <S.Divider />
        <S.Title>Trade Nfts</S.Title>
      </S.Wrapper>
      <S.Button isConnected={!!account} onClick={connect}>
        <p>{account ? account : "Connect Wallet"}</p>
        {account && <BiWallet size={25} />}
      </S.Button>
    </S.Container>
  );
};

export default Header;
