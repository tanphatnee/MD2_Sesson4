import {
  ADD_STUDENT,
  CHANGE_TOGGLE,
  DELETE_TUDENT,
  EDIT_STUDENT,
  FILTER,
  SHOW_STUDENT,
  UPDATE_STUDENT,
} from "../constants/actionTypes";

export const search = (searchText, sort) => {
  return {
    type: FILTER,
    payload: { searchText, sort },
  };
};

export const addToList = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};
export const handleEdit = (student) => ({
  type: EDIT_STUDENT,
  payload: student,
});
export const updateToList = (studentUpdate) => {
  return {
    type: UPDATE_STUDENT,
    payload: studentUpdate,
  };
};
export const deleteStudent = (idDelete) => {
  return {
    type: DELETE_TUDENT,
    payload: idDelete,
  };
};
export const addStudent = (actionName) => {
  return {
    type: CHANGE_TOGGLE,
    payload: actionName,
  };
};
export const showStudent = (student) => ({
  type: SHOW_STUDENT,
  payload: student,
});
