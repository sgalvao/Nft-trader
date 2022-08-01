/* eslint-disable @next/next/no-img-element */
import { useWeb3 } from "../../context/web3Context";
import { RequestNftProps } from "../../types/api";
import { BsFillGiftFill } from "react-icons/bs";
import * as S from "./styles";
import { useRouter } from "next/router";
import { FaEthereum } from "react-icons/fa";
import { useSendNft } from "../../hooks/useSendNft";
import Web3 from "web3";
import { useState } from "react";
import { SendModal } from "../SendModal";

const NftCard = ({ data }: RequestNftProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { account, web3, contractAbi } = useWeb3();
  const { sendNft } = useSendNft({
    web3: web3 as Web3,
    tokenId: data.tokenId,
    nftAddress: data.address,
    account,
    contractAbi,
  });

  const handleOpen = () => {
    setIsOpen(true);
  };

  const router = useRouter();

  return (
    <>
      <S.Container>
        <S.Header>
          <S.Title>{data.name}</S.Title>
          <S.Wrapper>
            <S.NftCount>{`${data.nftsCount} NFTs`}</S.NftCount>
            <S.Icon>
              <FaEthereum size={16} color="#C0D8DF" />
            </S.Icon>
          </S.Wrapper>
        </S.Header>
        <S.NftContainer>
          <S.Nft src={data.metadata.image} alt="teste" loading="lazy" />
        </S.NftContainer>
        <S.Details>
          <S.Title>{`${data.metadata.name} #${data.tokenId}`}</S.Title>
          <S.Description
            onClick={() =>
              router.push(
                `https://rinkeby.etherscan.io/address/${data.address}`
              )
            }
          >{`Contract: ${data.address}`}</S.Description>
        </S.Details>
        <S.Button onClick={handleOpen}>
          <BsFillGiftFill size={22} /> Send NFT
        </S.Button>
      </S.Container>
      <SendModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={sendNft}
      />
    </>
  );
};

export default NftCard;
