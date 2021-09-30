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
  const [hover, setHover] = useState(false);

  const formatAmPm = (dataString) => {
    if (dataString) {
      const hours = parseInt(dataString.split(":")[0]);
      return hours % 12 !== 0 ? dataString + " PM" : dataString + " AM";
    }
  };

  const [selectedRow_, setselectedRow_] = useState(false);
  console.log(selectedMail);
  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
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
      className="emailRow"
    >
      <div
        style={{
          opacity: hover ? 1 : 0.5,
        }}
        className="emailListRows__options"
      >
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
      <div className="emailListRows__message__title">
        <div className="emailListRows__message">
          <h4>
            {subject} {" -"}
            <span className="emailListRows__description">{description}</span>
          </h4>
        </div>

        <p
          style={{
            // flex: 0.2,
            paddingRight: "52px",

            display: !hover ? "inline" : "none",
          }}
          className="emailListRows__time"
        >
          {formatAmPm(time.split(",")[1]?.slice(0, 6))}
        </p>

        <div
          id="emailListRows__right_settings"
          style={{
            display: hover ? "inline" : "none",
            //   marginRight: "-40px",

            //   flex: 0.3,
          }}
        >
          
          <IconButton style={{ width: "45px" }}>
            <StarBorder style={{ width: "20px" }} />
          </IconButton>
          <IconButton style={{ width: "45px" }}>
            <LabelImportantIcon style={{ width: "20px" }} />
          </IconButton>
          <IconButton style={{ width: "45px" }}>
            <StarBorder style={{ width: "20px" }} />
          </IconButton>
          <IconButton style={{ width: "45px" }}>
            <LabelImportantIcon style={{ width: "20px" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
