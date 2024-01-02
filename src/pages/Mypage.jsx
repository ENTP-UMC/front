import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

export default function Mypage() {
  return (
    <MypageContainer>
      <Header />
      <h1>Mypage</h1>
    </MypageContainer>
  );
}

const MypageContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;
