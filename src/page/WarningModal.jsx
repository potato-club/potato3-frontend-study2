import Modal from "react-modal";

export function WarningModal({ modalIsOpen, setModalIsOpen }) {
  return (
    <Modal
      style={modalStyle}
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      // ariaHideApp={false}
    >
      값을 입력해주세요!
    </Modal>
  );
}

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(15, 15, 15, 0.79)",
  },
  content: {
    position: "absolute",
    top: "45%",
    left: "50%",
    width: "200px",
    height: "100px",
    border: "2px solid #d39898",
    background: "#FFFFFF",
    overflow: "auto",
    borderRadius: "10px",
    outline: "none",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
