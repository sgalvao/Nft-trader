import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
  background: #424242;
  border-radius: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2rem;
  position: relative;
  z-index: 2;
`;

export const NftCount = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1.4rem;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
`;

export const NftContainer = styled.div`
  overflow: hidden;
`;

export const Nft = styled.img`
  width: 100%;
  height: 30rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

export const Details = styled.div`
  padding: 0.6rem 2rem;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h2`
  font-family: "Poppins";
  color: white;
  font-size: 1.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 58%;
`;

export const Description = styled.h3`
  font-family: "Poppins";
  color: white;
  font-size: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  transition: 0.2s all ease-in;
  cursor: pointer;
  &:hover {
    color: rgba(221, 153, 26, 0.8);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.2rem;
  outline: none;
  border: none;
  color: white;
  text-align: start;
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 0px 0px 0.6rem 0.6rem;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.2s all ease-in;

  svg {
    fill: #fe613c;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    color: rgba(254, 97, 60, 0.4);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  padding: 0.4rem;
  background: #4f5281;
  margin-left: 1rem;
`;
