import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 10rem;
  height: 4rem;
  font-weight: bold;
  font-family: "Pretendard";

  margin: 1em 2em;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: white;
  background: SteelBlue;
  &:hover {
    background-color: AliceBlue;
    color: black;
  }
`;

function StudyBtn(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default StudyBtn;
