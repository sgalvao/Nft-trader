import styled from "styled-components";
import media from "styled-media-query";

interface Props {
  isOpen?: boolean;
  cancel?: boolean;
}

export const Overlay = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 10;
  animation: fadeIn 0.6s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Container = styled.div<Props>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  z-index: 11;
  padding: 2rem 2rem 1rem 2rem;
  border-radius: 2rem;
  background-color: #212121;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${media.greaterThan("medium")`
    width: 52rem;
  `}
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-family: "Fira Code", monospace;
  font-weight: bold;
  color: #fff;
  margin: 0;
  padding: 1rem;
  text-align: center;
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button<Props>`
  background: rgba(0, 0, 0, 0.29);
  color: white;
  margin: 2rem 2rem;
  padding: 1rem 2rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.29);
  border-radius: 1.2rem;
  font-family: "Bebas Neue";
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    color: #cecece;
    border: 1px solid ${({ cancel }) => (cancel ? "#FC2B2B" : "#90FA19")};
  }
`;
