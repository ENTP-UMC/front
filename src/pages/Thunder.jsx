import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { Nav } from 'react-bootstrap';
import myImage from '../assets/img/thunderblock.png';
import { useNavigate } from 'react-router-dom';
import ClubCreate from '../components/Thunder/ClubCreate';
import ClubCreate2 from '../components/Thunder/ClubCreate2';

const ClubData = [
  "여행",
  "동네친구",
  "반려동물",
  "봉사활동",
  "음식",
  "운동",
  "코딩",
  "음악",
  "문화/예술",
  "게임",
];

const ThunderContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

const SelectedTabText = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  word-wrap: break-word;
`;

const NotSelectedTabText = styled.div`
  color: #b0b0b0;
  font-size: 20px;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  word-wrap: break-word;
`;

const OuterTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: 19px 18px;
`;

const TagContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  margin: 4px 3px;
  border-radius: 10px;
  border: 1px solid black;
  gap: 6px;
`;

const TagText = styled.div`
  color: black;
  font-size: 12px;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  word-wrap: break-word;
`;

const ClubItemBlack = styled.div`
  width: 170px;
  height: 170px;
  margin: 9px;
  background-color: black;
  border-radius: 6.18px;
  position: relative;
`;

const ClubItemGreen = styled.div`
  width: 170px;
  height: 170px;
  margin: 9px;
  background-color: #02ff70;
  border-radius: 6.18px;
  position: relative;
`;

const ClubItemBlock = styled.div`
  padding: 2px 17px;
  display: flex;
`;

const ClubItemTextWhite = styled.div`
  color: white;
  font-size: 20;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  line-height: 20;
  word-wrap: break-word;
`;

const ClubItemTextBlack = styled.div`
  color: black;
  font-size: 20;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  line-height: 20;
  word-wrap: break-word;
`;

const ClubCreateButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 121px;
  height: 40px;
  background: #bcbcbc;
  border-radius: 30px;
  border: 1px #eaeaea solid;
  font-color: black;
  font-size: 16px;
  font-family: "Pretendard-Regular";
  font-weight: 700;
  line-height: 21px;
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function Thunder() {
  let [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleNext = ()=>{
    navigate('/ClubCreate2')
  }

  return (
    <ThunderContainer>
      <Header />

      <h2
        style={{
          color: "black",
          fontSize: 25,
          fontFamily: "Inter",
          fontWeight: "600",
          wordWrap: "break-word",
          padding: 17,
        }}
      >
        UMC 스몰팟
      </h2>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item style={{ flex: 1 }}>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
            style={{ textAlign: "center" }}
          >
            {tab === 0 ? (
              <SelectedTabText>소모임</SelectedTabText>
            ) : (
              <NotSelectedTabText>소모임</NotSelectedTabText>
            )}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ flex: 1 }}>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
            style={{ textAlign: "center" }}
          >
            {tab === 1 ? (
              <SelectedTabText>Thunder⚡</SelectedTabText>
            ) : (
              <NotSelectedTabText>Thunder⚡</NotSelectedTabText>
            )}
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {
        [
          <div>
            <OuterTagContainer>
              {ClubData.map((data, index) => (
                <TagContainer key={index}>
                  <TagText>{data}</TagText>
                </TagContainer>
              ))}
            </OuterTagContainer>
            <ClubItemBlock>
              <ClubItemBlack>
                <ClubItemTextWhite>클라이밍</ClubItemTextWhite>
              </ClubItemBlack>
              <ClubItemGreen>
                <ClubItemTextBlack>배드민턴</ClubItemTextBlack>
              </ClubItemGreen>
            </ClubItemBlock>
            <ClubItemBlock>
              <ClubItemGreen>
                <ClubItemTextBlack>클라이밍</ClubItemTextBlack>
              </ClubItemGreen>
              <ClubItemBlack>
                <ClubItemTextWhite>배드민턴</ClubItemTextWhite>
              </ClubItemBlack>
            </ClubItemBlock>
            <ClubItemBlock>
              <ClubItemBlack>
                <ClubItemTextWhite>클라이밍</ClubItemTextWhite>
              </ClubItemBlack>
              <ClubItemGreen>
                <ClubItemTextBlack>배드민턴</ClubItemTextBlack>
              </ClubItemGreen>
            </ClubItemBlock>

          <ClubCreateButton onClick={()=> navigate('/ClubCreate')}>모임 만들기</ClubCreateButton>
          </div>, 
          <div style={{display:'flex', flexDirection: 'column', paddingTop: '15px', alignItems: 'flex-start'}} onClick={handleNext}>
            <img  onClick={handleNext} src={myImage} style={{width: "90vw", padding: '11px'}} alt="myImage" />
            <img src={myImage} style={{width: "90vw", padding: '11px'}} alt="myImage" />
            <img src={myImage} style={{width: "90vw", padding: '11px'}} alt="myImage" />
            <img src={myImage} style={{width: "90vw", padding: '11px'}} alt="myImage" />
          </div>][tab]}
      
    </ThunderContainer>
  );
}

const Img = styled.img`
  dislay: flex;
  width: 90vw;
  margin-left: 22px;
  margin-top: 15px;
`;
