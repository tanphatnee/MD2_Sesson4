import React from "react";
import { useDispatch } from "react-redux";
import { deleteStudent, handleEdit, showStudent } from "../actions";

function Student(props) {
  let dispatch = useDispatch();
  let { student, stt } = props;
  return (
    <tr>
      <td>{stt}</td>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.gen ? "Nam" : "Nữ"}</td>
      <td>
        <div className="template-demo">
          <button
            onClick={() => dispatch(showStudent(student))}
            type="button"
            className="btn btn-danger btn-icon-text"
          >
            Xem
          </button>
          <button
            type="button"
            onClick={() => dispatch(handleEdit(student))}
            className="btn btn-warning btn-icon-text"
          >
            Sửa
          </button>
          <button
            onClick={() => dispatch(deleteStudent(student.id))}
            type="button"
            className="btn btn-success btn-icon-text"
          >
            Xóa
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Student;
