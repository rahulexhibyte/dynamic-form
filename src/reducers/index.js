import { constants } from "../constants";

const initialValue = {
  isModalShow: false,
  formItem: {},
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

    case constants.ADD_FORMITEM:
      const newState = Object.assign(state);
      const item = {
        ...action.formItem,
      };
      newState.formItem[action.formItem.field_name] = item;
      console.log(newState);
      return {
        ...newState,
      };

    case constants.REMOVE_FORMITEM:
      delete state.formItem[action.id];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducers;
