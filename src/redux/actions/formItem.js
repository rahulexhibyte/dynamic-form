import { Constants } from "../constants";

export const setFormTitle = (title) => ({
  type: Constants.SET_FORM_TITLE_ACTIONS,
  title,
});
export const setFormDesc = (desc) => ({
  type: Constants.SET_FORM_DESC_ACTIONS,
  desc,
});

export const addFormItem = (formItem) => ({
  type: Constants.ADD_FORM_ITEM_ACTION,
  formItem,
});

export const removeFormItem = (id) => ({
  type: Constants.REMOVE_FORM_ITEM_ACTION,
  id,
});

export const setFormId = (uniqueID) => ({
  type: Constants.SET_FORM_ID_ACTION,
  formId: uniqueID,
});
