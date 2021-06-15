import { Form, Input, Modal } from "antd";

const specificationModal = ({
  isModalVsible,
  setIsModalVisible,
  form,
  setplaceHolder,
}) => {
  return (
    <Modal
      visible={isModalVsible}
      centered
      okText="submit"
      closable={false}
      onCancel={() => {
        setIsModalVisible(false);
      }}
      title="Specification"
      onOk={() => {
        form
          .validateFields()
          .then((values) => setplaceHolder(values.placeHolder));

        setIsModalVisible(false);
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

export default specificationModal;
