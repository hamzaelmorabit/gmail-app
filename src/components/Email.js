import React from "react";
import { IconButton } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import { useHistory } from "react-router-dom";

import "./../styles/Email.css";
import {
  AlternateEmailOutlined,
  ArrowBackIosOutlined,
  CheckCircleOutline,
  DeleteForeverTwoTone,
  DeleteOutlineSharp,
  DeleteOutlineTwoTone,
  ErrorOutlineRounded,
  ExitToAppOutlined,
  ExitToAppRounded,
  ExitToAppSharp,
  LabelImportantOutlined,
  MoreVertOutlined,
  MoveToInboxOutlined,
  PrintOutlined,
  UnfoldMoreOutlined,
} from "@material-ui/icons";
import { selectEmail2 } from "./../features/emailSlice";

import { useSelector } from "react-redux";

export default function Email() {
  const {
    subject,
    title,
    time,
    description,
  }={} = useSelector(selectEmail2);

  const history = useHistory();

  return (
    <div className="emailMessage">
      <div className="emailMessage__header">
        <div className="header__left">
          <IconButton onClick={() => history.goBack()}>
            <ArrowBackIosOutlined />
          </IconButton>
          <IconButton>
            <MoveToInboxOutlined />
          </IconButton>
          <IconButton>
            <ErrorOutlineRounded />
          </IconButton>
          <IconButton>
            <DeleteForeverTwoTone />
          </IconButton>
          <IconButton>
            <AlternateEmailOutlined />
          </IconButton>
          <IconButton>
            <CheckCircleOutline />
          </IconButton>
          <IconButton>
            <UnfoldMoreOutlined />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
        <div className="header__right">
          <IconButton>
            <UnfoldMoreOutlined />
          </IconButton>
          <IconButton>
            <PrintOutlined />
          </IconButton>
          <IconButton>
            <ExitToAppRounded />
          </IconButton>
        </div>
      </div>
      <div className="emailMessage__body">
        <div className="headerMessage_body">
          <div className="left_item">
            <h3>{subject}</h3>
            <IconButton>
              <LabelImportantOutlined style={{ color: "#e8ab02" }} />
            </IconButton>
            <h6>{title}</h6>
          </div>
          <div className="right_item">
            <h3>{time}</h3>
          </div>
        </div>
        <div className="bodyMessage__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
