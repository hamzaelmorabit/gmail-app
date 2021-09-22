import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import DraftsIcon from "@material-ui/icons/Drafts";
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
import "./EmailList.css";
import EmailListSection from "./EmailListSection";
import EmailListRows from "./EmailListRows";
import {useHistory} from "react-router-dom"
export default function EmailList() {
  const [selectedRow, setSelectedRow] = useState(true);
const history = useHistory()

  return (
    <div className="emailList" onClick={() => history.push("./mail")}>
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
          Icon={DraftsIcon}
          selected={true}
          title={"Primary"}
          color={"red"}
        />
        <EmailListSection
          Icon={PeopleOutline}
          selected={false}
          title={"Promotions"}
          color={"blue"}
        />
        <EmailListSection
          Icon={LocalOfferOutlined}
          selected={false}
          color={"green"}
          title={"Social"}
        />
      </div>
      <div className="emailList__rows">
        <EmailListRows
          selectedRow={selectedRow}
          title={"title"}
          description={"description"}
          time={"time"}
          subject={"subject"}
          id={"id"}
        />
        <EmailListRows
          selectedRow={selectedRow}
          title={"title"}
          description={
            "subjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"time"}
          subject={
            "zzz"
          }
          id={"id"}
        />
      </div>
    </div>
  );
}
