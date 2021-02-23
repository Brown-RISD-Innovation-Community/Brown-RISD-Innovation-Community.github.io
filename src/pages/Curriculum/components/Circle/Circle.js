import React from "react";
import styles from "./Circle.module.css";

export default function Circle(props) {
  return (
    <div
      className={`row m-0 justify-content-center align-items-center ${styles.circle}`}
    >
      <h5>{props.heading}</h5>
    </div>
  );
}
