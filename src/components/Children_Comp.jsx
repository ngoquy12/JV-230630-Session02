import React from "react";

export default function Children_Comp(props) {
  console.log("Tham số của Children: ", props.userName);
  return <div>UserName của Children : {props.userName}</div>;
}
