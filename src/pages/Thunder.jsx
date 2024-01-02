import React, { useState } from 'react';
import styled from "styled-components";
import Header from "../components/Header/Header";
import { Nav } from 'react-bootstrap';

const ThunderContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

const SelectedTabText = styled.div`
  color: black;
  font-size: 20px;
  font-family: 'Pretendard-Regular';
  font-weight: 500;
  word-wrap: break-word;
`;

const NotSelectedTabText = styled.div`
  color: #B0B0B0; 
  font-size: 20px;
  font-family: 'Pretendard-Regular';
  font-weight: 500;
  word-wrap: break-word
`;


export default function Thunder() {
  let [tab, setTab] = useState(0);

  return (
    <ThunderContainer>
      <Header />
      <h2 style={{color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word', padding: 17}}>UMC 스몰팟</h2>
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item style={{flex: 1}}>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0" style={{textAlign: 'center'}}>
            {tab === 0 ? <SelectedTabText>소모임</SelectedTabText> : <NotSelectedTabText>소모임</NotSelectedTabText>}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{flex: 1}}>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1" style={{textAlign: 'center'}}>
            {tab === 1 ? <SelectedTabText>Thunder⚡</SelectedTabText> : <NotSelectedTabText>Thunder⚡</NotSelectedTabText>}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {[<div>내용0</div>, <div>내용1</div>][tab]}
    </ThunderContainer>
  );
}

