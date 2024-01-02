import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Mainpage from "../components/Home/Mainpage";

const HomeContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Mainpage />
    </HomeContainer>
  );
}
