import React from "react";
import Header from "./Header.js";
import "./App.css";
import SideBar from "./SideBar.js";
import Email from "./Email.js";
import EmailList from "./EmailList.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <SideBar />
          <Switch>
            <Route path="/EmailList">
              <Email />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
