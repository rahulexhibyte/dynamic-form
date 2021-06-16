import { constants } from "../constants";

const modalShow = () => ({ type: constants.MODAL_SHOW });
const modalClose = () => ({ type: constants.MODAL_CLOSE });

export { modalShow, modalClose };
