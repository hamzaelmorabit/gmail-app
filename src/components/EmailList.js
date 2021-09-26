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
  const [selectedPrimary, setSelectedPrimary] = useState(true);
  const [selectedPromotions, setSelectedPromotions] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState(false);
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
        <div
          onClick={() => {
            setSelectedPromotions(false);
            setSelectedSocial(false);

            setSelectedPrimary(true);
          }}
        >
          <EmailListSection
            Icon={DraftsIcon}
            selected={selectedPrimary}
            title={"Primary"}
            color={"red"}
          />
        </div>
        <div
          onClick={() => {
            setSelectedPrimary(false);
            setSelectedSocial(false);
            setSelectedPromotions(true);
          }}
        >
          <EmailListSection
            Icon={PeopleOutline}
            selected={selectedPromotions}
            title={"Promotions"}
            color={"blue"}
          />
        </div>
        <div
          onClick={() => {
            setSelectedPrimary(false);
            setSelectedPromotions(false);
            setSelectedSocial(true);
          }}
        >
          <EmailListSection
            Icon={LocalOfferOutlined}
            selected={selectedSocial}
            color={"green"}
            title={"Social"}
          />
        </div>
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
        {selectedPrimary ? (
          sendEmails.map(
            ({ id, data: { to, message, timesTamp, subject } }) => (
              <EmailListRows
                key={id}
                selectedRow={true}
                title={to}
                description={message}
                time={new Date(timesTamp?.toDate()).toLocaleString()}
                subject={subject}
                // id={id}
              />
            )
          )
        ) : selectedPromotions ? (
          <>
            <EmailListRows
              key={"ix"}
              selectedRow={true}
              title={"to"}
              description={"message"}
              time={new Date().toLocaleString()}
              subject={"subject"}
              // id={id}
            />
            <EmailListRows
              key={"id"}
              selectedRow={true}
              title={"to"}
              description={"message"}
              time={new Date().toLocaleString()}
              subject={"subject"}
              // id={id}
            />
          </>
        ) : (
          <EmailListRows
            key={"id"}
            selectedRow={true}
            title={"to"}
            description={"message"}
            time={new Date().toLocaleString()}
            subject={"subject"}
            // id={id}
          />
        )}
      </div>
    </div>
  );
}
