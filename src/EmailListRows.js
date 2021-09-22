import React, { useState } from "react";
import {
  ArrowDropDownCircleOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  KeyboardHideOutlined,
  SettingsSharp,
  RedoSharp,
  PeopleOutline,
  LocalOfferOutlined,
  MoreVertOutlined,
} from "@material-ui/icons";
import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarBorder from "@material-ui/icons/StarBorder";
import "./EmailListRows.css";
export default function EmailListRows({
  title,
  description,
  time,
  id,
  subject,
  selectedRow,
}) {
  const [selectedRow_, setselectedRow_] = useState(selectedRow);
  return (
    <div className="emailRow">
      <div className="emailListRows__options">
        <Checkbox
          onChange={() => setselectedRow_(selectedRow)}
          checked={selectedRow_}
        />
        <IconButton>
          <StarBorder />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className="emailListRows__title">{title}</h3>
      <div className="emailListRows__message">
        <h4>
          {subject} {" -"} 
          <span className="emailListRows__description">{description}</span>
        </h4>
      </div>
      <p className="emailListRows__time">{Date.now()}</p>
    </div>
  );
}
