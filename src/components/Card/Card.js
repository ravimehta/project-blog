import React from "react";
import clsx from "clsx";

import styles from "./Card.module.css";

function Card({ children, as: Component = "div", className, ...delegated }) {
  return (
    <Component className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </Component>
  );
}

export default Card;
