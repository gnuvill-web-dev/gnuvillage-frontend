import React from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IntroductionStyle } from "../styles/styled";

import StudyResultItem from "../components/StudyResultItem";

import { Link } from "react-router-dom";

const StudyResultsStyle = styled.div``;

const StudyResultsPage = styled.div`
  position: relative;
  margin: 30px 80px;
`;

const Pos = styled.div`
  padding: 20px 30px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-flow: row wrap;
`;

export default function StudyResults() {
  return (
    <StudyResultsStyle>
      <Navbar />

      <IntroductionStyle>
        <div className="intro-title-img">
          <img
            className="main-img"
            src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
            alt="mainImg"
          />
          <div className="intro-header-title">Study Results</div>
        </div>
      </IntroductionStyle>

      <StudyResultsPage>
        <Pos>
          <Link to="/study-intro/c">
            <StudyResultItem></StudyResultItem>
          </Link>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
          <StudyResultItem></StudyResultItem>
        </Pos>
      </StudyResultsPage>
    </StudyResultsStyle>
  );
}
