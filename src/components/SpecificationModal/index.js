import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modal";

const SpecificationModal = ({ onSubmit, children }) => {
  const isModalShow = useSelector((state) => state.modal.isModalOpen);
  const dispatch = useDispatch();
  return (
    <Modal
      visible={isModalShow}
      centered
      okText="submit"
      closable={false}
      onCancel={() => {
        dispatch(closeModal());
      }}
      title="Specification"
      onOk={onSubmit}
    >
      {children}
    </Modal>
  );
};

export default SpecificationModal;
