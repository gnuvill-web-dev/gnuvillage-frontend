import React from "react";
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StudyBtn from "../components/StudyBtn";

import { IntroductionStyle } from "../styles/styled";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";

import StudyResultItem from "../components/StudyResultItem";

const StudyStyle = styled.div``;

const StudyPage = styled.div`
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

const StudyTitle3 = styled.div`
  font-size: 15px;
  text-align: left;
  padding: 0 30px;
  font-family: "Pretendard-Thin";
`;

const StudyButtons = styled.div`
  padding: 20px 40px;
  /* border: 1px solid lightgray; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default function Study() {
  const navigate = useNavigate();

  const studys1 = [
    { id: 0, name: "C", url: "/study-intro/c" },
    { id: 1, name: "JAVA", url: "/study-intro/java" },
    { id: 2, name: "ALGORITHM", url: "/study-intro/algo" },
    { id: 3, name: "DATA SCIENCE", url: "/study-intro/data" },
    { id: 4, name: "WEB basic", url: "/study-intro/web1" },
    { id: 5, name: "WEB development", url: "/study-intro/web2" },
  ];

  const studys2 = [
    { id: 0, name: "스터디 1", url: "/study-intro/study1" },
    { id: 1, name: "스터디 2", url: "/study-intro/study2" },
    { id: 2, name: "스터디 3", url: "/study-intro/study3" },
  ];

  const studys3 = [
    { id: 0, name: "스터디 a", url: "/study-intro/studyA" },
    { id: 1, name: "스터디 b", url: "/study-intro/studyB" },
    { id: 2, name: "스터디 c", url: "/study-intro/studyC" },
    { id: 3, name: "스터디 d", url: "/study-intro/studyD" },
    { id: 4, name: "스터디 e", url: "/study-intro/studyE" },
    { id: 5, name: "스터디 f", url: "/study-intro/studyF" },
    { id: 6, name: "스터디 g", url: "/study-intro/studyG" },
    { id: 7, name: "스터디 h", url: "/study-intro/studyH" },
    { id: 8, name: "스터디 i", url: "/study-intro/studyI" },
  ];

  return (
    <StudyStyle>
      <Navbar />

      <IntroductionStyle>
        <div className="intro-title-img">
          <img
            className="main-img"
            src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
            alt="mainImg"
          />
          <div className="intro-header-title">Study</div>
        </div>
      </IntroductionStyle>

      <StudyPage>
        <StudyTitle1>Introduction</StudyTitle1>
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
        <StudyTitle3>자유롭게 스터디를 만들어 활동할 수 있습니다.</StudyTitle3>
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
        <StudyTitle3>
          공모전, 해커톤 등 외부활동을 위한 팀을 만들어 활동할 수 있습니다.
        </StudyTitle3>
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

        <br />

        <StudyTitle1>Results</StudyTitle1>
        <Swiper spaceBetween={50} slidesPerView={4} navigation loop={true}>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
          <SwiperSlide>
            <StudyResultItem></StudyResultItem>
          </SwiperSlide>
        </Swiper>
      </StudyPage>
    </StudyStyle>
  );
}
