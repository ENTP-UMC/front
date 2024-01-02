import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const ThunderContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

export default function Home() {
  return (
    <ThunderContainer>
      <Header />
      <h1>Thunder</h1>
    </ThunderContainer>
  );
}
