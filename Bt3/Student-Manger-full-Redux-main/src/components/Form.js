import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addToList, updateToList } from "../actions";
import {
  ADD_STUDENT,
  EDIT_STUDENT,
  SHOW_STUDENT,
  UPDATE_STUDENT,
} from "../constants/actionTypes";
const initData = {
  id: "",
  name: "",
  age: 0,
  gen: true,
  born: "",
  bornIn: "",
  address: "",
};
function Form() {
  const [data, setData] = useState(initData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  let selected = useSelector((state) => state.filter.selectedStudent);
  let actionName = useSelector((state) => state.filter.actionName);
  console.log(actionName);
  useEffect(() => {
    if (selected.name) {
      setData(selected);
    }
  }, [selected]);
  const handleUpdate = (e) => {
    e.preventDefault();
    let updateData = {
      ...data,
      gen: data.gen === "true" ? true : false,
    };
    dispatch(updateToList(updateData));
  };
  const handleAdd = (e) => {
    e.preventDefault();
    let updateData = {
      ...data,
      gen: data.gen === "true" ? true : false,
      id: v4(),
    };
    dispatch(addToList(updateData));
    setData(initData);
  };

  let btn =
    actionName === ADD_STUDENT ? (
      <button
        onClick={handleAdd}
        type="submit"
        className="btn btn-success me-2"
      >
        ADD
      </button>
    ) : actionName === EDIT_STUDENT ? (
      <button
        onClick={handleUpdate}
        type="submit"
        className="btn btn-info me-2"
      >
        UPDATE
      </button>
    ) : (
      <button type="submit" className="btn btn-primary me-2">
        OK
      </button>
    );
  return (
    <div className="col-5 grid-margin">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  disabled={
                    actionName === EDIT_STUDENT || actionName === SHOW_STUDENT
                  }
                  type={actionName === ADD_STUDENT ? "hidden" : "text"}
                  value={data.id}
                  onChange={handleChange}
                  name="id"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={data.name}
                  onChange={handleChange}
                  name="name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  value={data.age}
                  onChange={handleChange}
                  name="age"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  onChange={handleChange}
                  value={data.gen}
                  name="gen"
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  type="date"
                  name="born"
                  onChange={handleChange}
                  value={data.born}
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  name="bornIn"
                  onChange={handleChange}
                  className="form-control"
                  value={data.bornIn}
                >
                  <option value="HN">Hà Nội</option>
                  <option value="HCM">TP. Hồ Chí Minh</option>
                  <option value="DN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  name="address"
                  className="form-control"
                  onChange={handleChange}
                  value={data.address}
                />
              </div>
            </div>
            {btn}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
