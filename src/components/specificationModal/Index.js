import { Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { modalClose } from "../../actions";

const SpecificationModal = ({ form, setplaceHolder }) => {
  const isModalShow = useSelector((state) => state.isModalShow);
  const dispatch = useDispatch();
  return (
    <Modal
      visible={isModalShow}
      centered
      okText="submit"
      closable={false}
      onCancel={() => {
        dispatch(modalClose());
      }}
      title="Specification"
      onOk={() => {
        form
          .validateFields()
          .then((values) => setplaceHolder(values.placeHolder));
        dispatch(modalClose());
      }}
    >
      <Form form={form}>
        <Form.Item label="PlaceHolder" name="placeHolder">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SpecificationModal;
