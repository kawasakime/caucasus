import React from "react";

import styles from "./Button.module.scss";

const Button = ({ link, text }) => {
  return (
    <a href={link} className={styles.btn} target="blank">
      {text}
    </a>
  );
};

export default Button;
