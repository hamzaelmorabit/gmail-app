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
import usePagination from "./pagination/Pagination";
import Stack from "@mui/material/Stack";
import TablePagination from "@mui/material/TablePagination";

import { Pagination } from "@material-ui/lab";
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

  const [show, setShow] = useState(false);

  const transitionScroll = () => {
    if (window.scrollY > 10) setShow(true);
    else setShow(false);
    console.log("scroll");
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionScroll);
    return () => window.removeEventListener("scroll", transitionScroll);
  }, []);

  // console.log(loading, "loading");
  useEffect(() => {
    console.log("useEffect.data");

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
    console.log(sendEmails, "sendEmails");

    // realtimePosts?.docs.map((post) => console.log(post.data().timesTamp));
  }, []);

  const history = useHistory();
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    if (newPage === 0) {
      setBegin(0);
      setEnd(rowsPerPage);
    } else {
      setBegin(newPage * rowsPerPage);
      if (newPage * rowsPerPage + rowsPerPage - 1 > sendEmails.length)
        setEnd(sendEmails.length);
      else setEnd(newPage * rowsPerPage + rowsPerPage);
    }
  };
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(rowsPerPage);
  const maxPage = Math.ceil(sendEmails.length / rowsPerPage);


  console.log(begin);
  console.log(end);

  return (
    <div className="emailList">
      <div id={`${show && "navShow"}`} className="emailList__settings">
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
          <div className="TablePagination">
            <TablePagination
              component="div"
              count={maxPage * rowsPerPage}
              page={page}
              labelRowsPerPage=""
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[]}
              className={{
                caption: "caption",
                toolbar: "toolbar",
                selectRoot: "selectRoot",
              }}
              // classes={"MuiSlider-root"}
              // className={"MuiSlider-root"}
              // onRowsPerPageChange={handleChangeRowsPerPage}
              // rowsPerPageOptions={[5, 10, 15,100]}
            />
          </div>
          <div className="icons__right__section">
            <IconButton>
              <KeyboardHideOutlined />
            </IconButton>
            <IconButton>
              <SettingsSharp />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="TablePaginationSmallScreen">
        <TablePagination
          component="div"
          count={maxPage * rowsPerPage}
          page={page}
          labelRowsPerPage=""
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
          className={{
            caption: "caption",
            toolbar: "toolbar",
            selectRoot: "selectRoot",
          }}
          // classes={"MuiSlider-root"}
          // className={"MuiSlider-root"}
          // onRowsPerPageChange={handleChangeRowsPerPage}
          // rowsPerPageOptions={[5, 10, 15,100]}
        />
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
          sendEmails
            .slice(begin, end)
            .map(({ id, data: { to, message, timesTamp, subject } }) => (
              <EmailListRows
                key={id}
                selectedRow={true}
                title={to}
                description={message}
                time={new Date(timesTamp?.toDate()).toLocaleString()}
                subject={subject}
                // id={id}
              />
            ))
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
