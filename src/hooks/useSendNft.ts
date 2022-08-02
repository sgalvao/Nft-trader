import { toast } from "react-toastify";
import Web3 from "web3";

type SendProps = {
  web3: Web3;
  nftAddress: string;
  account: string;
  contractAbi: any;
  tokenId: number | string;
};

export const useSendNft = ({
  web3,
  nftAddress,
  account,
  contractAbi,
  tokenId,
}: SendProps) => {
  const sendNft = async (receiver: string) => {
    const contract = new web3.eth.Contract(contractAbi, nftAddress);
    try {
      await contract.methods
        .safeTransferFrom(account, receiver, tokenId)
        .send({ from: account });
      toast.success("Success!! NFT sended.");
    } catch (e: any) {
      toast.error(`Unexpected error 🤯 !! ${e.message}`);
    }
  };

  return {
    sendNft,
  };
};
