import { ModalStyled, ModalDiv } from "./modal.styled";

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const Modal = ({ children, setIsOpen, isOpen }: ModalProps) => {
  return (
    <div>
      {isOpen && (
        <ModalStyled>
          <ModalDiv>
            {children}
            <button onClick={() => setIsOpen(false)}>Close</button>
          </ModalDiv>
        </ModalStyled>
      )}
    </div>
  );
};

export default Modal;
