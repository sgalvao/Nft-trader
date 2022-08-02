import Input from "../Input";
import UploadAvatar from "../UploadAvatar";
import * as S from "./styles";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  onSubmit?: () => {};
}

export const EditModal = ({ onClose, isOpen }: ModalProps) => {
  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClose} />
      <S.Container isOpen={isOpen}>
        <S.Title>Change your Avatar</S.Title>
        <S.Upload>
          <UploadAvatar />
        </S.Upload>
        <Input placeholder="username..." label="Change username" />
        <S.Wrapper>
          <S.Button cancel onClick={onClose}>
            Cancel
          </S.Button>
          <S.Button onClick={onClose}>Save</S.Button>
        </S.Wrapper>
      </S.Container>
    </>
  );
};
