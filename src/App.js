import React, { useEffect } from "react";
import Header from "./components/Header.js";
import "./App.css";
import SideBar from "./components/SideBar.js";
import Email from "./components/Email.js";
import EmailList from "./components//EmailList.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SendEmail from "./components/SendEmail.js";
import { selectEmail } from "./features/emailSlice";
import { selectLogin, login } from "./features/loginSlice";

import { useSelector, useDispatch } from "react-redux";
import Login from "./components/Login.js";
import { auth, provider } from "./firebase";
function App() {
  const sendMessageIsOpen = useSelector(selectEmail);
  const dispatch = useDispatch();
  const user = useSelector(selectLogin);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user)
        dispatch(
          login({
            email: user.email,
            name: user.displayName,
            photoURL: user.photoURL,
          })
        );
    });
  }, []);

  // if (!user) {
  //   return (
  //     <div className="App">
  //       <Login />
  //     </div>
  //   );
  // } else
    return (
      <Router>
        {!user ? (
          <div className="App">
            <Login />
          </div>
        ) : (
          <div className="App">
            {/* <Counter/> */}
            <Header />
            <div className="app__body">
              <SideBar />
              <Switch>
                <Route path="/mail">
                  <Email />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
            {sendMessageIsOpen && <SendEmail />}
          </div>
        )}
      </Router>
    );
}

export default App;
