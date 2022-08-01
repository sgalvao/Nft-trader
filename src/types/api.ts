export type RequestNftProps = {
  data: NftProps;
};

export type NftProps = {
  address: string;
  name: string;
  metadata: {
    name: string;
    image: string;
  };
  nftsCount: string;
  tokenId: string;
};
