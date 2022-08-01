import { useState } from "react";
import { validateAddress } from "../../utils/addressValidate";
import Input from "../Input";
import * as S from "./styles";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  onSubmit: (receiver: string) => {};
}

export const SendModal = ({ onClose, isOpen, onSubmit }: ModalProps) => {
  const [receiver, setReceiver] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (receiver: string) => {
    if (!validateAddress(receiver)) {
      return setError("Invalid Address");
    }
    onSubmit(receiver);
  };

  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClose} />
      <S.Container isOpen={isOpen}>
        <S.Title>Transfer Nft</S.Title>
        <Input
          placeholder="Insert receiver address..."
          label="Receiver Address"
          onChange={(e) => setReceiver(e.target.value)}
          error={error}
        />
        <S.Wrapper>
          <S.Button cancel onClick={onClose}>
            Cancel
          </S.Button>
          <S.Button onClick={() => handleSubmit(receiver)} disabled={!receiver}>
            Send Nft
          </S.Button>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
