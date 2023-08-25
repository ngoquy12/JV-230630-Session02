import React, { Component } from "react";

export default class FormAdd extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userCode: "",
        userName: "",
        dateOfBirth: "",
        address: "",
        email: "",
        password: "",
      },
    };
  }
  // Đóng form
  handleCloseForm = () => {
    this.props.handleClose(false);
  };

  // Hàm lắng nghe sự thay đổi của các ô input
  handleChangeInput = (e) => {
    const { value, name } = e.target;

    // set lại state
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  // Hàm xử lý gửi dữ liệu
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.user);
  };
  render() {
    return (
      <div>
        <>
          {/* Modal add user start */}
          <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Thêm mới sinh viên
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={this.handleCloseForm}
                    onChange={(e) => this.handleChangeInput(e)}
                  />
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    {" "}
                    {/**Sự kiện submit form */}
                    <div className="mb-2">
                      <label htmlFor="studentCode" className="form-label">
                        Mã sinh viên
                      </label>
                      <input
                        type="text"
                        name="userCode"
                        className="form-control"
                        id="studentCode"
                        value={this.userCode}
                        onChange={(e) => this.handleChangeInput(e)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="studentName" className="form-label">
                        Tên sinh viên
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="studentName"
                        name="userName"
                        value={this.userName}
                        onChange={(e) => this.handleChangeInput(e)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="dateOfBirth" className="form-label">
                        Ngày sinh
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={this.dateOfBirth}
                        onChange={(e) => this.handleChangeInput(e)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="address" className="form-label">
                        Địa chỉ
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={this.address}
                        onChange={(e) => this.handleChangeInput(e)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        value={this.email}
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={(e) => this.handleChangeInput(e)}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label">
                        Mật khẩu
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={this.password}
                        onChange={(e) => this.handleChangeInput(e)}
                      />
                    </div>
                    <div className="d-flex justify-content-end gap-3">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Hủy
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Lưu
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Modal add user end */}
        </>
      </div>
    );
  }
}
