import { useQuery } from "@apollo/client";
import { useWeb3 } from "../../context/web3Context";
import { GET_NFTS } from "../../graphql/queries/walletInfo";
import { NftProps } from "../../types/api";
import { ConnectWallet } from "../ConnectWallet";
import NftCard from "../NftCard";
import { Profile } from "../Profile";
import * as S from "./styles";

const Homepage = () => {
  const { account } = useWeb3();

  const { data, loading } = useQuery(GET_NFTS, {
    variables: {
      chainIdList: [4],
      ownerAddress: account,
      offset: 0,
      limit: 50,
    },
  });

  return (
    <S.Container>
      {account && !loading ? (
        <>
          <Profile />
          <S.Title>My NFT`s</S.Title>
          <S.Content>
            {data
              ? data.erc721ByOwner.map((nft: NftProps, index: any) => (
                  <NftCard key={index} data={nft} />
                ))
              : null}
          </S.Content>
        </>
      ) : (
        <ConnectWallet />
      )}
    </S.Container>
  );
};

export default Homepage;
