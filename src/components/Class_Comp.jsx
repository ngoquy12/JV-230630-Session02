import React, { Component } from "react";
import Children_Class_Comp from "./Children_Class_Comp";

export default class Class_Comp extends Component {
  // Khai báo constructor => Hàm khởi tạo hay là bản thiết kế của một đối tượng
  constructor(props) {
    super(props); // Super được sử dụng để kế thừa lại tất cả các phương thức và thuộc tính của class cha
    // Khai báo state
    this.state = {
      // Danh sách các state muốn khai báo
      company: "Rikkei Academy",
      status: true,
      userName: "David Beckam",
    };
  }

  // Hàm handleClick
  handleClick = (e) => {
    console.log("event", e);
    // Cập nhật lại state
    this.setState({
      company: "Rikkei Soft",
    });
  };

  // Hàm xử lý trạng thái button
  handleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  // Hàm cập nhật lại state userName
  handleChangeName = (name) => {
    console.log("Đã nhận ", name);
    // cập nhật lại state
    this.setState({
      userName: name,
    });
  };

  render() {
    return (
      <>
        <div>Tên công ty: {this.state.company}</div>
        <button onClick={(e) => this.handleClick(e)}>Change State</button>
        <button onClick={this.handleStatus}>
          {this.state.status ? "Hiện" : "Ẩn"}
        </button>
        {/* Gọi đến component con */}
        <h1>UserName bên trong Class_Comp: {this.state.userName}</h1>
        <Children_Class_Comp
          userName={this.state.userName}
          handleChangeName={this.handleChangeName}
        />
      </>
    );
  }
}

// Có một nút button có title là show, khi click vào thì hiển thị là ẩn, khi
// click lần nữa thì hiẻn thị là hiển
// Tạo ra một state title có giá trị làm hiện,
// Viết một hàm để set lại state
