// src/MainButton/MainButton.tsx
import React from "react";
import { Button } from "antd";
var MainButton = ({
  children,
  icon,
  iconPosition = "start",
  ...restProps
}) => {
  return /* @__PURE__ */ React.createElement(Button, { ...restProps }, icon && iconPosition === "start" && /* @__PURE__ */ React.createElement("span", { style: { marginRight: 8 } }, icon), children, icon && iconPosition === "end" && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: 8 } }, icon));
};
var MainButton_default = MainButton;
export {
  MainButton_default as default
};
