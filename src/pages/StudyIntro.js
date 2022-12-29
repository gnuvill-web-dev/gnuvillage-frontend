import React from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

import TabIntro from "./TabStudyIntro";
import TabResult from "./TabStudyResult";

const StudyIntroStyle = styled.div``;

const StudyIntroPage = styled.div`
  position: relative;
  top: 70px;
  margin: 30px 80px;
`;

const StudyTitle4 = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
`;

const PageIndex = styled.div`
  font-size: 12px;
  text-align: left;
  font-family: "Pretendard-Thin";
`;

function TabContent(props) {
  if (props.index === 0) {
    // return <div>스터디 소개 (주요 활동 내용, 커리큘럼, 진행방식 etc.)</div>;
    return <TabIntro></TabIntro>;
  } else if (props.index === 1) {
    return (
      // <div>스터디 성과물 (프로젝트 팀 - 결과물 / 세미나 팀 - 달성도, 후기)</div>
      <TabResult></TabResult>
    );
  }
}

export default function StudyIntro() {
  let [index, setIndex] = useState(0);

  return (
    <StudyIntroStyle>
      <Navbar />

      <StudyIntroPage>
        <PageIndex>
          <Link to="/study" style={{ textDecoration: "none" }}>
            정규스터디
          </Link>
          <span>{" > "}</span>
          <Link to="/study-intro/c" style={{ textDecoration: "none" }}>
            C
          </Link>
        </PageIndex>

        <StudyTitle4>C</StudyTitle4>

        <Nav
          className="mt-5 mb-3"
          variant="tabs"
          defaultActiveKey="link-0"
          justify
        >
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                setIndex(0);
              }}
            >
              Introduction
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                setIndex(1);
              }}
            >
              Result
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent index={index} />
      </StudyIntroPage>
    </StudyIntroStyle>
  );
}
