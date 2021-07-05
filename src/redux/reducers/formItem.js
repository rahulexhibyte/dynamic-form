import { Constants } from "../constants";

const initState = {
  currentformId: null,
  formItem: {},
};
const form = (state = initState, action) => {
  switch (action.type) {
    case Constants.SET_FORM_TITLE_ACTIONS:
      state.formItem[`${state.currentformId}`]["title"] = action.title;
      return {
        ...state,
      };
    case Constants.SET_FORM_DESC_ACTIONS:
      state.formItem[`${state.currentformId}`]["desc"] = action.desc;
      return {
        ...state,
      };
    case Constants.ADD_FORM_ITEM_ACTION:
      const newState = Object.assign(state);
      const item = {
        ...action.formItem,
      };
      newState.formItem[`${newState.currentformId}`]["formItem"][
        action.formItem.field_name
      ] = item;
      console.log(newState);
      return {
        ...newState,
      };

    case Constants.REMOVE_FORM_ITEM_ACTION:
      delete state.formItem[state.currentformId]["formItem"][action.id];
      return {
        ...state,
      };

    case Constants.SET_FORM_ID_ACTION:
      state.formItem[`${action.formId}`] = {
        title: null,
        desc: null,
        formItem: {},
      };
      return {
        ...state,
        currentformId: action.formId,
      };

    default:
      return state;
  }
};

export default form;
