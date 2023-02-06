import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from './components/Navbar';
import "./App.css";

import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import History from "./pages/History";
import Review from "./pages/Review";
// import WriteReview from "./pages/WriteReview";
import Study from "./pages/Study";
import ReviewEdit from "./pages/ReviewEdit";
import ReviewCreate from "./pages/ReviewCreate";
import Recruit from "./pages/Recruit";
import RecruitDetail from "./pages/RecruitDetail";
import Mypage from "./pages/Mypage";
import StudyNoticeList from "./pages/StudyNoticeList";
import StudyIntro from "./pages/StudyIntro";
import LogIn from "./pages/LogIn";
import StudyNotice from "./pages/StudyNotice";
import StudyResults from "./pages/StudyResults";
import Signup from "./pages/SignUp";
import StudyNoticeEdit from "./pages/StudyNoticeEdit";
import StudyNoticeCreate from "./pages/StudyNoticeCreate";
import Notice from "./pages/Notice";
import NoticeEdit from "./pages/NoticeEdit";
import NoticeCreate from "./pages/NoticeCreate";
import FindPW from "./pages/FindPW";
import FindID from "./pages/FindID";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/intro" element={<Introduction />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/notice/edit/:postId" element={<NoticeEdit />}></Route>
        <Route path="/notice/create" element={<NoticeCreate />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/review/edit/:postId" element={<ReviewEdit />}></Route>
        <Route path="/review/create" element={<ReviewCreate />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/findId" element={<FindID />}></Route>
        <Route path="/findPw" element={<FindPW />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/study" element={<Study />}></Route>
        <Route path="/recruit" element={<Recruit />}></Route>
        <Route path="/recruit/Detail" element={<RecruitDetail />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/study-intro/:groupId" element={<StudyIntro />}></Route>
        <Route path="/study-notice" element={<StudyNotice />}></Route>
        <Route
          path="/study-notice/:groupId/edit/:postId"
          element={<StudyNoticeEdit />}
        ></Route>
        <Route
          path="/study-notice/:groupId/create"
          element={<StudyNoticeCreate />}
        ></Route>
        <Route
          path="/study-notice/:groupId"
          element={<StudyNoticeList />}
        ></Route>
        <Route path="/study-results" element={<StudyResults />}></Route>

        {/* <Route index element={<Mypage />}></Route> */}
        {/* <Route index element={<Review />}></Route> */}
        {/* <Route index element={<WriteReview />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
