import {
  ADD_STUDENT,
  DELETE_TUDENT,
  UPDATE_STUDENT,
} from "../constants/actionTypes";

const initState = [
  {
    id: "SV001",
    name: "Nguyễn Văn A",
    age: 20,
    gen: true,
    born: "",
    bornIn: "",
    address: "",
  },

];

export const listStudent = (state = initState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [...state, action.payload];
    case DELETE_TUDENT:
      let newArr = state.filter((student) => student.id !== action.payload);
      return newArr;
    case UPDATE_STUDENT:
      let id;
      state.forEach((student, index) => {
        if (student.id === action.payload.id) {
          id = index;
        }
      });
      state[id] = action.payload;
      return [...state];
    default:
      return state;
  }
};
