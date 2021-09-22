import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import {
  ArrowDropDownCircleOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  KeyboardHideOutlined,
  SettingsSharp,
  RedoSharp,
  MoreVertOutlined,
} from "@material-ui/icons";
import { Checkbox, IconButton } from "@material-ui/core";
import "./EmailList.css";
import EmailListSection from "./EmailListSection";
export default function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList-rightSide">
          <Checkbox />
          <IconButton>
            <ArrowDropDownCircleOutlined />
          </IconButton>
          <IconButton>
            <RedoSharp />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
        <div className="emailList-leftSide">
          <IconButton>
            <ChevronLeftOutlined />
          </IconButton>
          <IconButton>
            <ChevronRightOutlined />
          </IconButton>
          <IconButton>
            <KeyboardHideOutlined />
          </IconButton>
          <IconButton>
            <SettingsSharp />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <EmailListSection
          Icon={SettingsSharp}
          selected={true}
          title={"Primary"}
          color={"red"}
        />
        <EmailListSection
          Icon={SettingsSharp}
          selected={false}
          title={"Promotions"}
          color={"blue"}
        />
        <EmailListSection
          Icon={SettingsSharp}
          selected={false}
          color={"green"}
          title={"Social"}
        />
      </div>
    </div>
  );
}
