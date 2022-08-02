import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid white;
  flex-direction: column;

  margin-bottom: 3rem;

  ${media.lessThan("medium")`
  max-width: 35rem;
  `}
  ${media.lessThan("large")`
  max-width: 60rem;
  `}
`;

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 26rem;
  border-radius: 2rem;
  position: relative;
  padding: 2rem;
  background-image: url("https://app.nftfy.org/_next/static/media/cover-default.c2050a8d.svg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  position: absolute;
  overflow: hidden;
  bottom: 1rem;
  transition: 0.2s all ease-in;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const EditIcon = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  color: #cecece;
  background: transparent;
  border-radius: 50%;
  padding: 2rem;
  cursor: pointer;
  transition: 0.2s all ease-in;
  svg {
    display: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    svg {
      display: flex;
    }
  }

  z-index: 3;
`;

export const Info = styled.div`
  display: flex;
  margin: 2rem 0;
  align-self: flex-start;
  padding: 0 2rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Username = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  ${media.lessThan("large")`
  max=width: 40rem;

  `}

  ${media.lessThan("medium")`
  max-width: 30rem;
    font-size: 2.6rem;
  `}
`;

export const EditButton = styled.div`
  display: flex;
  border-radius: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
`;

export const Address = styled.p`
  color: #3249f5;
  font-size: 1.6rem;
  font-family: "Poppins";
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 12rem;
`;

export const Description = styled.p``;
