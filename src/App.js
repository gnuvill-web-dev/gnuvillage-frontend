import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import "./App.css";

import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import History from "./pages/History";
import Review from "./pages/Review";
import WriteReview from "./pages/WriteReview";
import Study from "./pages/StudyPost";
import Recruit from "./pages/Recruit";
import RecruitDetail from "./pages/RecruitDetail";
import Mypage from "./pages/Mypage";
import StudyNoticeList from "./pages/StudyNoticeList";
import StudyIntro from "./pages/StudyIntro";
import LogIn from "./pages/LogIn";
import StudyNotice from "./pages/StudyNotice";
import StudyResults from "./pages/StudyResults";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/intro" element={<Introduction />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/review/write" element={<WriteReview />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/study" element={<Study />}></Route>
        <Route path="/recruit" element={<Recruit />}></Route>
        <Route path="/recruit/Detail" element={<RecruitDetail />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/study-notice/c" element={<StudyNoticeList />}></Route>
        <Route path="/study-intro/c" element={<StudyIntro />}></Route>
        <Route path="/study-notice" element={<StudyNotice />}></Route>
        <Route
          path="/study-notice/:groupId"
          element={<StudyNoticeList />}
        ></Route>
        <Route path="/study-results" element={<StudyResults />}></Route>
      </Routes>
    </div>
  );
}

export default App;
