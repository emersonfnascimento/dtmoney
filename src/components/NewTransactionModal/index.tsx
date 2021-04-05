import Modal from "react-modal";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClone: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClone,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClone}>
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}
