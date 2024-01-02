import React from 'react';
import styled from "styled-components";
import Header from "../Header/Header.jsx";


const ClubCreateContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

export default function ClubCreate() {
  return (
    <ClubCreateContainer>
        <Header />
        <h2>dfdf</h2>
    </ClubCreateContainer>
  )
}
