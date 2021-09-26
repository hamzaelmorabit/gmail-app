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
import { openSendEmail, selectSideBarEmail } from "./../features/emailSlice";
function SideBar() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const sideBarOpen_ = useSelector(selectSideBarEmail);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar" style={{ flex: sideBarOpen_ ? 0.08 : 0.3 }}>
      {/* <IconButton> */}
      {/* <AddIcon /> */}
      {sideBarOpen_ ? (
        <Button
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "32px",
            backgroundImage:
              "url(https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png)",
            padding: "30px",
            backgroundColor: "whitesmoke",
            borderRadius: "50%",
            margin: "0 auto",
          }}
          onClick={() => dispatch(openSendEmail())}
        ></Button>
      ) : (
        <div className="sideBar__top">
          <Button
            startIcon={<AddIcon />}
            onClick={() => dispatch(openSendEmail())}
            className="buttonBase"
          >
            {"Compose"}
          </Button>{" "}
        </div>
      )}
      {/* </IconButton> */}

      <div className="sideBar__middle">
        <div
          className="item"
          style={{
            justifyContent: sideBarOpen_ ? "center" : "",
          }}
        >
          <InboxIcon />
          <div
            style={{
              display: !sideBarOpen_ ? "inline" : "none",
            }}
          >
            <p>inbox</p>
            <span>54</span>
          </div>
        </div>
        <div
          className="item"
          style={{
            justifyContent: sideBarOpen_ ? "center" : "",
          }}
        >
          <StarIcon />
          <div style={{ display: !sideBarOpen_ ? "" : "none" }}>
            <p>Starred</p>
            <span>54</span>
          </div>
        </div>
        <div
          className="item"
          style={{
            justifyContent: sideBarOpen_ ? "center" : "",
          }}
        >
          <AccessTimeIcon />
          <div style={{ display: !sideBarOpen_ ? "" : "none" }}>
            <p>Snoozed</p>
            <span>54</span>
          </div>
        </div>
        <div
          className="item"
          style={{
            justifyContent: sideBarOpen_ ? "center" : "",
          }}
        >
          <LabelImportantIcon />
          <div style={{ display: !sideBarOpen_ ? "" : "none" }}>
            <p>Important</p>
            <span>54</span>
          </div>
        </div>
        <div
          className="item"
          style={{
            justifyContent: sideBarOpen_ ? "center" : "",
          }}
        >
          <SendIcon />

          <div style={{ display: !sideBarOpen_ ? "" : "none" }}>
            <p>Sent</p>
            <span>54</span>
          </div>
        </div>
        <div
          className="item"
          style={{
            justifyContent: sideBarOpen_ ? "center" : "",
          }}
        >
          <DraftsIcon />
          <div style={{ display: !sideBarOpen_ ? "" : "none" }}>
            <p>Drafts</p>
            <span>54</span>
          </div>
        </div>
        <div
          style={{
            justifyContent: sideBarOpen_ ? "center" : "",
          }}
          onClick={handleClick}
          className="item"
        >
          <ExpandMoreIcon />
          <div style={{ display: !sideBarOpen_ ? "" : "none" }}>
            <p>More</p>
            <span>54</span>
          </div>
        </div>

        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          style={{
            display: "flex",
            margin: !sideBarOpen_ ? "13px 13px" : "5px -10px",
            paddingLeft: !sideBarOpen_ ? "13px" : "30px",
          }}
        >
          <List
            style={{
              justifyContent: sideBarOpen_ ? "center" : "",
              alignContent: sideBarOpen_ ? "center" : "",
              display: "flex",
              flexDirection: "column",
              // width: sideBarOpen_ ? "82px" : "110px",
            }}
            component="div"
            disablePadding
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              {!sideBarOpen_ && <ListItemText primary="Starred" />}
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              {!sideBarOpen_ && <ListItemText primary="DraftsIcon" />}
            </ListItemButton>
          </List>
        </Collapse>
        <div
          className="sideBar__bottom"
          style={{
            width: sideBarOpen_ ? "22px" : "110px",

            // flex: 1,
            flexDirection: sideBarOpen_ ? "column" : "row",
          }}
        >
          <PersonIcon className="PhoneIcon" />
          <PhoneIcon className="PhoneIcon" />
          <DuoIcon className="DuoIcon" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
