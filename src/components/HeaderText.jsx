import React from "react";

const HeaderText = ({
  className,
  size = "text-3xl font-bold",
  color = "#000000",
  children,
}) => {
  return <p className={`${size} ${color} ${className}`}> {children} </p>;
};

export default HeaderText;
