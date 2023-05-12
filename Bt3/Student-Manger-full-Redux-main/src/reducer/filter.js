import {
  CHANGE_TOGGLE,
  EDIT_STUDENT,
  SEARCH,
  SHOW_STUDENT,
  SORT,
  UPDATE_STUDENT,
} from "../constants/actionTypes";

const initState = {
  searchText: "",
  searchSort: "",
  isToggle: false,
  actionName: "",
  selectedStudent: {},
};

export const filter = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_TOGGLE:
      return {
        ...state,
        isToggle: true,
        actionName: action.payload,
        selectedStudent: {},
      };
    case EDIT_STUDENT:
      return {
        ...state,
        isToggle: true,
        selectedStudent: action.payload,
        actionName: EDIT_STUDENT,
      };
    case SHOW_STUDENT:
      return {
        ...state,
        isToggle: true,
        selectedStudent: action.payload,
        actionName: SHOW_STUDENT,
      };
    case UPDATE_STUDENT:
      return { ...state, isToggle: false };
    case SEARCH:
      return { ...state, searchText: action.payload };
    case SORT:
      return { ...state, searchSort: action.payload };
    default:
      return state;
  }
};
