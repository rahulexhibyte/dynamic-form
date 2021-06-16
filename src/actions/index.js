import { constants } from "../constants";

const modalShow = () => ({ type: constants.MODAL_SHOW });
const modalClose = () => ({ type: constants.MODAL_CLOSE });
const addFormItem = (formItem) => ({ type: constants.ADD_FORMITEM, formItem });
const removeFormItem = (id) => ({ type: constants.REMOVE_FORMITEM, id });
export { modalShow, modalClose, addFormItem, removeFormItem };
