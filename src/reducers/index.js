import { constants } from "../constants";

const initialValue = {
  isModalShow: false,
};

const reducers = (state = initialValue, action) => {
  switch (action.type) {
    case constants.MODAL_SHOW:
      return {
        ...state,
        isModalShow: true,
      };

    case constants.MODAL_CLOSE:
      return {
        ...state,
        isModalShow: false,
      };

    default:
      return state;
  }
};

export default reducers;
