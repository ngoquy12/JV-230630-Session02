import React, { Component } from "react";

export default class Children_Class_Comp extends Component {
  // Hàm handle click
  handleClick = () => {
    this.props.handleChangeName("Rose");
  };
  render() {
    return (
      <>
        <div>UserName ở Children_Class_Comp: {this.props.userName}</div>
        <button onClick={this.handleClick}>Change Props</button>
      </>
    );
  }
}
