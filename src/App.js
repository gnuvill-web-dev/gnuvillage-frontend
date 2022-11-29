import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import History from "./pages/History";

import Study from "./pages/Study";
import StudyNotice from "./pages/StudyNotice";
import StudyResults from "./pages/StudyResults";
import StudyNoticeList from "./pages/StudyNoticeList";
import StudyIntro from "./pages/StudyIntro";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/intro" element={<Introduction />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/study" element={<Study />}></Route>
        <Route path="/study-results" element={<StudyResults />}></Route>
        <Route path="/study-notice" element={<StudyNotice />}></Route>
        <Route path="/study-intro/c" element={<StudyIntro />}></Route>
        <Route path="/study-notice/c" element={<StudyNoticeList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
