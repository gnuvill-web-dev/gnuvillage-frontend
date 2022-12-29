import React from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StudyBtn from "../components/StudyBtn";

import { IntroductionStyle } from "../styles/styled";

const StudyNoticeStyle = styled.div``;

const StudyNoticeMain = styled.div`
  position: relative;
  margin: 30px 80px;
`;

const StudyTitle1 = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  padding: 20px 0;
  font-family: "Pretendard";
`;

const StudyTitle2 = styled.div`
  font-size: 20px;
  text-align: left;
  padding: 20px 30px 0;
  font-family: "Pretendard";
`;

const StudyButtons = styled.div`
  padding: 20px 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default function StudyNotice() {
  const navigate = useNavigate();

  const studys1 = [
    { id: 0, name: "C", url: "/study-notice/c" },
    { id: 1, name: "JAVA", url: "/study-notice/java" },
    { id: 2, name: "ALGORITHM", url: "/study-notice/algo" },
    { id: 3, name: "DATA SCIENCE", url: "/study-notice/data" },
    { id: 4, name: "WEB basic", url: "/study-notice/web1" },
    { id: 5, name: "WEB development", url: "/study-notice/web2" },
  ];

  const studys2 = [
    { id: 0, name: "스터디 1", url: "/study-notice/study1" },
    { id: 1, name: "스터디 2", url: "/study-notice/study2" },
    { id: 2, name: "스터디 3", url: "/study-notice/study3" },
  ];

  const studys3 = [
    { id: 0, name: "스터디 a", url: "/study-notice/studyA" },
    { id: 1, name: "스터디 b", url: "/study-notice/studyB" },
    { id: 2, name: "스터디 c", url: "/study-notice/studyC" },
    { id: 3, name: "스터디 d", url: "/study-notice/studyD" },
    { id: 4, name: "스터디 e", url: "/study-notice/studyE" },
    { id: 5, name: "스터디 f", url: "/study-notice/studyF" },
    { id: 6, name: "스터디 g", url: "/study-notice/studyG" },
    { id: 7, name: "스터디 h", url: "/study-notice/studyH" },
    { id: 8, name: "스터디 i", url: "/study-notice/studyI" },
  ];

  return (
    <StudyNoticeStyle>
      <Navbar />

      <IntroductionStyle>
        <div className="intro-title-img">
          <img
            className="main-img"
            src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
            alt="mainImg"
          />
          <div className="intro-header-title">Study Notice</div>
        </div>
      </IntroductionStyle>

      <StudyNoticeMain>
        <StudyTitle1>스터디별 공지사항</StudyTitle1>
        <StudyTitle2>정규 스터디</StudyTitle2>
        <StudyButtons>
          {studys1.map((study) => {
            return (
              <StudyBtn
                title={study.name}
                key={study.id}
                onClick={() => {
                  navigate(study.url);
                }}
              />
            );
          })}
        </StudyButtons>
        <hr />

        <StudyTitle2>자유 스터디</StudyTitle2>
        <StudyButtons>
          {studys2.map((study) => {
            return (
              <StudyBtn
                title={study.name}
                key={study.id}
                onClick={() => {
                  navigate(study.url);
                }}
              />
            );
          })}
        </StudyButtons>
        <hr />

        <StudyTitle2>대외활동 스터디</StudyTitle2>
        <StudyButtons>
          {studys3.map((study) => {
            return (
              <StudyBtn
                title={study.name}
                key={study.id}
                onClick={() => {
                  navigate(study.url);
                }}
              />
            );
          })}
        </StudyButtons>
      </StudyNoticeMain>
    </StudyNoticeStyle>
  );
}
