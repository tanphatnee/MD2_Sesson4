import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addStudent } from "../actions";
import { ADD_STUDENT, SEARCH, SORT } from "../constants/actionTypes";

function Control() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-3">
          <button
            onClick={() => {
              dispatch(addStudent(ADD_STUDENT));
            }}
            type="button"
            className="btn btn-primary btn-icon-text"
          >
            Thêm mới sinh viên
          </button>
        </div>
        <div className="col-6">
          <form className="search-form" action="#">
            <i className="icon-search" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                dispatch({ type: SEARCH, payload: e.target.value });
              }}
              type="search"
              className="form-control"
              placeholder="Search Here"
              title="Search here"
              name="search"
              id="search"
            />
          </form>
        </div>
        <div className="col-3 d-flex align-items-center">
          <select
            value={sort}
            className="form-control"
            onChange={(e) => {
              setSort(e.target.value);
              dispatch({ type: SORT, payload: e.target.value });
            }}
          >
            <option value="">Chọn sắp xếp</option>
            <option value="studentName-ASC">Tên tăng dần</option>
            <option value="studentName-DESC">Tên giảm dần</option>
            <option value="age-ASC">Tuổi tăng dần</option>
            <option value="age-DESC">Tuổi giảm dần</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Control;
