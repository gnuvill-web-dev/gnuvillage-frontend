import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { StudyNoticeListStyle } from "../styles/studyNoticeListStyled";
import axios from "axios";
import Pagination from "../components/Pagination";

const BACKEND_URL = "http://203.253.76.182";
let userId = "testid1";
let password = "testpw123";
let token;
let groupId;
let isGroupAdmin = false;
let pageNo = 1;
let totalPage = 10;

async function onMount(setStudyState, navigate) {
  let newStudyState = {};

  //로그인 과정
  await axios
    .post(BACKEND_URL + "/auth/login", {
      id: userId,
      password: password,
    })
    .then(async (res) => {
      token = res.data;
    });

  //그룹 정보 조회
  await axios
    .get(BACKEND_URL + "/groups/" + groupId)
    .then((res) => {
      newStudyState.name = res.data.name;
    })
    .catch((err) => {
      if (err.response.data.statusCode === 404) {
        navigate("/", { replace: true });
        alert("존재하지 않는 스터디입니다.");
      }
    });

  //유저가 그룹의 관리자인지 조회
  await axios
    .get(BACKEND_URL + "/groups/a", {
      params: {
        userId,
        groupId,
        admin: true,
      },
    })
    .then((res) => {
      if (res.data.items.length !== 0) isGroupAdmin = true;
    });

  //스터디 공지 리스트 가져옴
  await axios
    .get(BACKEND_URL + "/posts/g/" + groupId, {
      headers: { Authorization: "Bearer " + token },
      params: {
        pageNo: pageNo,
        admin: true,
      },
    })
    .then((res) => {
      newStudyState.list = res.data.items;
      totalPage = res.data.totalPage;
    })
    .catch((err) => {
      if (err.response.data.statusCode === 401) {
        navigate("/login", { replace: true });
      }
    });

  //state에 반영
  setStudyState(newStudyState);
}

export default function StudyNoticeList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [studyState, setStudyState] = useState({
    name: "동아리 이름",
    list: [],
  });
  const [postState, setPostState] = useState({});
  groupId = useParams().groupId;
  pageNo = searchParams.get("pageNo");
  if (pageNo === null) pageNo = 1;

  let postEditBtn;
  let postCreateBtn;
  if (isGroupAdmin) {
    postEditBtn = <button className="btn btn-secondary mb-2 me-3">수정</button>;
    postCreateBtn = <button className="btn btn-secondary mb-2">작성</button>;
  }

  useEffect(() => {
    onMount(setStudyState, navigate);
  }, []);

  const postList = [];
  for (let i = 0; i < studyState.list.length; i++) {
    const createdDate = new Date(studyState.list[i].createdDate);
    const date = createdDate.toLocaleDateString();
    const time = createdDate.toLocaleTimeString();
    postList.push(
      <a
        className="list-group-item list-group-item-action"
        onClick={() => setPostState(studyState.list[i])}
        key={i}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
      >
        <div className="d-flex flex-md-row flex-column">
          <div className="flex-grow-1">
            <strong>제목: </strong>
            {studyState.list[i].title}
          </div>
          <div className="me-3">
            <strong className="text-nowrap">작성자: </strong>
            {studyState.list[i].userId}
          </div>
          <div className=" text-muted">
            <small className="text-nowrap">{date + " " + time}</small>
          </div>
        </div>
      </a>
    );
  }

  return (
    <StudyNoticeListStyle>
      <Navbar />

      <div className="notice-list-header">
        <img
          className="notice-list-header-img"
          src="https://builder.hufs.ac.kr/user/hufs/mycodyimages/rr5back2.jpg"
          alt="headerImg"
        />
        <div className="notice-list-header-title">Study notice</div>
      </div>

      <div className="container">
        <div className="notice-list-title">'{studyState.name}' 공지사항</div>
        <div>
          <div className="list-group">{postList}</div>
        </div>
        <Pagination pageNo={pageNo} totalPage={totalPage}></Pagination>
        {postCreateBtn}
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
      >
        <div className="offcanvas-header">
          <div className="d-flex flex-column flex-fill align-items-start">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
            <h5 className="offcanvas-title mt-3" id="postOffcanvas">
              {postState.title}
            </h5>
            <div>
              <small className="me-2">작성자: {postState.userId}</small>
              <small>
                작성일:{" "}
                {new Date(postState.createdDate).toLocaleDateString() +
                  " " +
                  new Date(postState.createdDate).toLocaleTimeString()}
              </small>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="offcanvas-body">{postState.content}</div>
        <div className="offcanvas-button">{postEditBtn}</div>
      </div>
    </StudyNoticeListStyle>
  );
}
