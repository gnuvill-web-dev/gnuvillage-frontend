import React from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IntroductionStyle } from "../styles/styled";

const StudyNoticeListStyle = styled.div``;

const StudyNoticeListPage = styled.div`
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
  padding: 20px 30px;
  font-family: "Pretendard";
`;

export default function StudyNoticeList() {
  const navigate = useNavigate();

  return (
    <StudyNoticeListStyle>
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

      <StudyNoticeListPage>
        <StudyTitle1>'C' 공지사항</StudyTitle1>
        <StudyTitle2>리스트 자리 (by. 예은님)</StudyTitle2>
      </StudyNoticeListPage>
    </StudyNoticeListStyle>
  );
}
