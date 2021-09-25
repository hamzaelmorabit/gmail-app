import React, { useState, useEffect } from "react";

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
import "./../styles/EmailList.css";
import EmailListSection from "./EmailListSection";
import EmailListRows from "./EmailListRows";
import { useHistory } from "react-router-dom";

// import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectMail } from "./../features/emailSlice";

export default function EmailList() {
  const [selectedRow, setSelectedRow] = useState(false);
  // const [realtimePosts, error, loading] = useCollection(
  // db.collection("emails").orderBy("timesTamp", "desc")
  // );
  const dispatch = useDispatch();

  const [sendEmails, setSendEmails] = useState([]);

  // console.log(loading, "loading");
  useEffect(() => {
    // console.log("doc.data", realtimePosts);

    db.collection("emails")
      .orderBy("timesTamp", "desc")
      .onSnapshot((snapshot) =>
        setSendEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    console.log(sendEmails);
    // realtimePosts?.docs.map((post) => console.log(post.data().timesTamp));
  }, []);

  const history = useHistory();

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
      <div
        className="emailList__rows"
        // href={"/mail"}
      >
        {/* <ul>
          {realtimePosts?.docs.map((post) => (
            <li>{post.data().subject}</li>
          ))}
        </ul> */}
        {sendEmails.map(({ id, data: { to, message, timesTamp, subject } }) => (
          <EmailListRows
            key={id}
            selectedRow={true}
            title={to}
            description={message}
            time={new Date(timesTamp?.toDate()).toLocaleString()}
            subject={subject}
            // id={id}
          />
        ))}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
        <EmailListRows
          selectedRow={selectedRow}
          title={"s"}
          description={
            "qssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectssssssssssssssssssssssssssssssssssssssssssssssssssssssssssubjectsssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
          }
          time={"new Date()"}
          subject={"zzz"}
          id={222}
        />{" "}
      </div>
    </div>
  );
}
