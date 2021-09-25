import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";

export default function EmailListSection({ color, Icon, selected, title }) {
  return (
    <div
      style={{
        color: selected ? color : "#818181",
        borderBottom: `2px solid ${color}`,
        opacity: selected ? '1' : "0.65",

      }}
      className={`email-list-section ${selected && "selected__section"}`}
    >
      {/* <IconButton> */}
      <Icon className="icon"/>
      {/* </IconButton> */}
      {/*  */}
      <h4>{title}</h4>
    </div>
  );
}
