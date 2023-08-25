import React, { Component } from "react";
import FormAdd from "./FormAdd";

export default class Toolbar extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    // Khởi tạo state
    this.state = {
      show: false,
      userName: "Nguyễn Văn A",
    };
  }

  // Show form thêm mới
  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  // Show form thêm mới
  handleClose = (statue) => {
    this.setState({
      show: statue,
    });
  };

  // Hàm lắng nghe sự thay đổi trong ô input
  handleChange = (event) => {
    console.log("event===>", event.target.value);
    // set lại state
    this.setState({
      userName: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <>
          {/* Form add student  */}
          {this.state.show === true ? (
            <FormAdd handleClose={this.handleClose} />
          ) : (
            <></>
          )}

          {/* Toolbar start */}
          <div className="d-flex m-5 justify-content-between">
            <div className="d-flex align-items-center gap-4">
              <div style={{ width: 263, fontWeight: 600, fontSize: 20 }}>
                Quản lý sinh viên
              </div>
              <select className="form-select">
                <option value="">-- Sắp xếp theo tên --</option>
                <option value="">Tăng dần</option>
                <option value="">Giảm dần</option>
              </select>
            </div>
            <div className="d-flex align-items-center gap-4">
              <input
                style={{ minWidth: 300 }}
                type="text"
                className="form-control"
                placeholder="Tìm kiếm sinh viên theo tên"
                value={this.state.userName}
                onChange={(e) => this.handleChange(e)}
              />
              <button
                style={{ minWidth: 170 }}
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={this.handleShow}
              >
                Thêm mới sinh viên
              </button>
            </div>
          </div>
          {/* Toolbar end */}
        </>
      </div>
    );
  }
}
