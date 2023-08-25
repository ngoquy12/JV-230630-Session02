import React, { Component } from "react";

export default class ListUser extends Component {
  // Khởi tạo constructor
  constructor(props) {
    super(props);
    // Khai báo state
    this.state = {
      users: [
        {
          userId: 1,
          userName: "Nguyễn Văn A",
          age: 21,
          dateOfBirth: "12/12/2001",
          gender: 1,
        },
        {
          userId: 2,
          userName: "Trần Thị B",
          age: 25,
          dateOfBirth: "05/18/1998",
          gender: 0,
        },
        {
          userId: 3,
          userName: "Lê Minh C",
          age: 30,
          dateOfBirth: "09/03/1993",
          gender: 1,
        },
        {
          userId: 4,
          userName: "Phạm Thanh D",
          age: 28,
          dateOfBirth: "11/22/1995",
          gender: 0,
        },
        {
          userId: 5,
          userName: "Hoàng Quang E",
          age: 19,
          dateOfBirth: "07/10/2004",
          gender: 1,
        },
        {
          userId: 6,
          userName: "Ngô Thu F",
          age: 22,
          dateOfBirth: "03/29/1999",
          gender: 0,
        },
        {
          userId: 7,
          userName: "Vũ Anh G",
          age: 26,
          dateOfBirth: "02/15/1997",
          gender: 1,
        },
        {
          userId: 8,
          userName: "Đặng Hoài H",
          age: 31,
          dateOfBirth: "08/08/1992",
          gender: 0,
        },
        {
          userId: 9,
          userName: "Bùi Minh I",
          age: 24,
          dateOfBirth: "06/14/1999",
          gender: 1,
        },
        {
          userId: 10,
          userName: "Nguyễn Mai J",
          age: 27,
          dateOfBirth: "04/03/1996",
          gender: 0,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>Danh sách User</h3>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserId</th>
              <th scope="col">UserName</th>
              <th scope="col">Age</th>
              <th scope="col">DateOfBirth</th>
              <th scope="col">Gender</th>
              <th scope="col" colSpan={2}>
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.userId}</td>
                <td>{user.userName}</td>
                <td>{user.age}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.gender === 0 ? "Nam" : "Nữ"}</td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
