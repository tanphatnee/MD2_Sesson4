import React from "react";
import { useSelector } from "react-redux";
import { filter } from "../reducer/filter";
import Student from "./Student";

function ListStudent() {
  const listStudent = useSelector((state) => state.listStudent);
  const searchText = useSelector((state) => state.filter.searchText);
  console.log(searchText);
  const searchSort = useSelector((state) => state.filter.searchSort);
  let listFilter = listStudent.filter((student) =>
    student.name.includes(searchText)
  );
  let sortArr = searchSort.split("-");
  if (sortArr[0] === "studentName") {
    if (sortArr[1] === "ASC") {
      listFilter.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      listFilter.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
  } else {
    if (sortArr[1] === "ASC") {
      listFilter.sort((a, b) => a.age - b.age);
    } else {
      listFilter.sort((a, b) => b.age - a.age);
    }
  }
  return (
    <div className="card-body">
      <h3 className="card-title">Danh sách sinh viên</h3>
      <div className="table-responsive pt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listFilter.map((student, index) => (
              <Student key={student.id} student={student} stt={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListStudent;
