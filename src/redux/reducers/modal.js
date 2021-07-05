import { Constants } from "../constants";

const initState = {
  isModalOpen: false,
};

const modal = (state = initState, action) => {
  switch (action.type) {
    case Constants.OPEN_MODAL_ACTION:
      return {
        ...state,
        isModalOpen: true,
      };
    case Constants.CLOSE_MODAL_ACTION:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default modal;
