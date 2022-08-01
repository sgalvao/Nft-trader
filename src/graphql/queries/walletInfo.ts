import { gql } from "@apollo/client";

export const GET_NFTS = gql`
  query Erc721ByOwner(
    $chainIdList: [Int!]!
    $ownerAddress: String!
    $offset: Int
    $limit: Int
  ) {
    erc721ByOwner(
      chainIdList: $chainIdList
      ownerAddress: $ownerAddress
      offset: $offset
      limit: $limit
    ) {
      nftsCount
      name
      metadata {
        image
        imageFull
        instagram
        name
      }
      chainId
      address
      ownerAddress
      tokenId
      symbol
    }
  }
`;
