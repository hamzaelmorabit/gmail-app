import React from "react";
import "./SideBar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sideBar__top">
        {/* <IconButton> */}
        {/* <AddIcon /> */}
        <Button startIcon={<AddIcon />} className="buttonBase">
          Compose
        </Button>
        {/* </IconButton> */}
      </div>
      <div className="sideBar__middle">
        <div className="item">
          <InboxIcon />
          <p>inbox</p>
          <span>54</span>
        </div>
        <div className="item">
          <StarIcon />

          <p>Starred</p>
          <span>54</span>
        </div>
        <div className="item">
          <AccessTimeIcon />

          <p>Snoozed</p>
          <span>54</span>
        </div>
        <div className="item">
          <LabelImportantIcon />

          <p>Important</p>
          <span>54</span>
        </div>
        <div className="item">
          <SendIcon />
          <p>Sent</p>
          <span>54</span>
        </div>
        <div className="item">
          <DraftsIcon />

          <p>Drafts</p>
          <span>54</span>
        </div>
        <div className="item">
          <ExpandMoreIcon />

          <p>More</p>
          <span>54</span>
        </div>
        <div className="sideBar__bottom">
          <PersonIcon className="PhoneIcon" />
          <PhoneIcon className="PhoneIcon" />
          <DuoIcon className="DuoIcon" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
