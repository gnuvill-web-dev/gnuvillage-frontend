import React, { useEffect } from "react";
import BasePage from "../components/BasePage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostForm from "../components/PostForm";

const BACKEND_URL = "http://114.206.145.160:3000";
let token;

async function onMount(navigate) {
  if (
    sessionStorage["id"] === undefined ||
    sessionStorage["token"] === undefined
  ) {
    navigate("/login", { replace: true });
    alert("로그인이 필요합니다.");
  } else {
    token = sessionStorage["token"];
  }
}

function onSubmit(e, navigate) {
  e.preventDefault();
  const newPost = {
    title: e.target.title.value,
    content: e.target.content.value,
  };

  axios
    .post(BACKEND_URL + "/posts/", newPost, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      console.log(res.data);
      alert("작성 완료");
      navigate(-1);
    })
    .catch((err) => {
      if (err.response.data.statusCode === 400) {
        alert("입력 내용이 올바른 지 확인해주세요.");
      }
    });
}

export default function ReviewCreate() {
  const navigate = useNavigate();

  useEffect(() => {
    onMount(navigate);
  }, [navigate]);

  return (
    <BasePage headerTitle="Review" title="동아리 리뷰 작성">
      <PostForm
        onSubmit={(e) => {
          onSubmit(e, navigate);
        }}
      ></PostForm>
    </BasePage>
  );
}
