import { ModalStyled, ModalDiv } from "./modal.styled";

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  bg: string;
  font: string;
  width: number;
  height: number;
}

const Modal = ({
  children,
  setIsOpen,
  isOpen,
  bg,
  font,
  height,
  width,
}: ModalProps) => {
  return (
    <div>
      {isOpen && (
        <ModalStyled bg={bg} font={font}>
          <ModalDiv height={height} width={width}>
            {children}
            <button onClick={() => setIsOpen(false)}>Close</button>
          </ModalDiv>
        </ModalStyled>
      )}
    </div>
  );
};

export default Modal;
