import React, { useState } from "react";

import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import StarBorder from "@material-ui/icons/StarBorder";
import "./../styles/EmailListRows.css";
import { useSelector, useDispatch } from "react-redux";
import { openSendEmail, selectEmail2 } from "./../features/emailSlice";
import { useHistory } from "react-router-dom";
import { selectMail } from "./../features/emailSlice";

export default function EmailListRows({
  title,
  description,
  time,
  id,
  subject,
  selectedRow,
}) {
  const selectedMail = useSelector(selectEmail2);
  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedRow_, setselectedRow_] = useState(false);
  console.log(selectedMail);
  return (
    <div
      className="emailRow"
      onClick={() => {
        dispatch(
          selectMail({
            title,
            description,
            time,
            subject,
          })
        );
        history.push("./mail");
      }}
    >
      <div className="emailListRows__options">
        <Checkbox
          style={{ width: "30px" }}
          // onChange={() => setselectedRow_(selectedRow)}
          checked={selectedRow_}
        />
        <IconButton style={{ width: "45px" }}>
          <StarBorder style={{ width: "20px" }} />
        </IconButton>
        <IconButton style={{ width: "45px" }}>
          <LabelImportantIcon style={{ width: "20px" }} />
        </IconButton>
      </div>
      <h5 className="emailListRows__title">{title}</h5>
      <div className="emailListRows__message">
        <h4>
          {subject} {" -"}
          <span className="emailListRows__description">{description}</span>
        </h4>
      </div>
      <p className="emailListRows__time"> {time}</p>
    </div>
  );
}
