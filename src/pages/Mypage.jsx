import React from "react";
import Header from "../components/Header/Header";
import MypageMain from "../components/Mypage/MypageMain";
import styled from "styled-components";
export default function Mypage() {
  return (
    <Container>
      <Header />

      <MypageMain />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;
