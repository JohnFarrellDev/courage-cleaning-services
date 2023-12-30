import React from "react";
import styles from "./Box.module.css";

interface BoxProps {
  children: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {
  return <div className={styles.container}>{children}</div>;
};
