import React from "react";
import style from './style.module.css';

let Button = (props) => {
  return <div className={style.button}>
	  <button disabled={props.disabled} onClick={props.onClick}>{props.text}</button>
  </div>;
};

export default Button;
