import * as React from "react";

import "./../styles/SideBar.css";
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

import List from "@mui/material/List";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import { useSelector, useDispatch } from "react-redux";
import { openSendEmail } from "./../features/emailSlice";
function SideBar() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar">
      <div className="sideBar__top">
        {/* <IconButton> */}
        {/* <AddIcon /> */}
        <Button
          startIcon={<AddIcon />}
          onClick={() => dispatch(openSendEmail())}
          className="buttonBase"
        >
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
        <div onClick={handleClick} className="item">
          <ExpandMoreIcon />

          <p>More</p>
          <span>54</span>
        </div>

        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          style={{ display: "flex", marginLeft: "13px", marginBottom: "13px" }}
        >
          <List
            style={{ display: "flex", flexDirection: "column" }}
            component="div"
            disablePadding
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="DraftsIcon" />
            </ListItemButton>
          </List>
        </Collapse>
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
