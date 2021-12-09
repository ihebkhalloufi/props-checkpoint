import React from "react";
import './MainImage.css';

function MainImage(props) {
  return <img className="img" src= {props.image} />;
}
  export default MainImage