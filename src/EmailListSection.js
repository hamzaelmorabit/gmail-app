import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";

export default function EmailListSection({ color, Icon, selected, title }) {
  return (
    <div
      style={{
        color: selected ? color : "black",
        borderBottom:  `2px solid ${color}` 
      }}
      className={`email-list-section ${selected && "selected__section"}`}
    >
      {/* <IconButton> */}
        <Icon />
      {/* </IconButton> */}
{/*  */}
      <h4>{title}</h4>
    </div>
  );
}
