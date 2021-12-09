import React from "react";
import './MainFullName.css';

function MainFullName(props) {
  return <h1 className ="fullname"> {props.fullName}</h1>;
}

  export default MainFullName