import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import feed from "../../assets/img/피드.png";
import profile from "../../assets/img/profile.png";
import crown from "../../assets/img/왕관.png";

export default function OurDiary() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("button1");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <Header>
        <Title>Our 다이어리</Title>
        <Title2>공유 일기장 사이드 프로젝트</Title2>
        <ButtonWrap>
          <Stack>iOS</Stack>
          <Stack>Node.js</Stack>
        </ButtonWrap>
      </Header>
      <Bottom>
        공유 일기장 IOS 앱 출시를 위한
        <br />
        사이드 프로젝트 ‘Our 다이어리’ 페이지입니다.
      </Bottom>
      <ButtonContainer>
        <Button
          isActive={activeButton === "button1"}
          onClick={() => handleButtonClick("button1")}
        >
          피드
        </Button>
        <Button
          isActive={activeButton === "button2"}
          onClick={() => handleButtonClick("button2")}
        >
          멤버
        </Button>
      </ButtonContainer>
      <Content>
        {activeButton === "button1" && (
          <div>
            <Feed src={feed} />
            <Feed src={feed} />
            <Feed src={feed} />
          </div>
        )}

        {activeButton === "button2" && (
          <div>
            <Member>
              <Profile src={profile} />
              <MemberText>유씨/유엠씨</MemberText>
              <ProfileButton>web</ProfileButton>
              <Crown src={crown} />
            </Member>
            <Member>
              <Profile src={profile} />
              <MemberText>유씨/유엠씨</MemberText>
              <ProfileButton>web</ProfileButton>
            </Member>
            <Member>
              <Profile src={profile} />
              <MemberText>유씨/유엠씨</MemberText>
              <ProfileButton>web</ProfileButton>
            </Member>
            <Member>
              <Profile src={profile} />
              <MemberText>유씨/유엠씨</MemberText>
              <ProfileButton>web</ProfileButton>
            </Member>
            <Member>
              <Profile src={profile} />
              <MemberText>유씨/유엠씨</MemberText>
              <ProfileButton>web</ProfileButton>
            </Member>
          </div>
        )}
      </Content>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 25vh;
  justify-content: center;
`;
const Title = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 60px;
  font-weight: 400;
  color: white;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Title2 = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-weight: 400;
  color: white;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
`;
const Stack = styled.div`
  border-radius: 20px;
  background: #02ff70;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  font-family: "Pretendard-Regular";
  margin: 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Regular";
  width: 85vw;
  height: 10vh;
  margin: 0 auto;
  border-radius: 20px;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const Button = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  border-bottom: 2px solid black;
  font-size: 20px;
  padding: 7px;
  width: 50%;
  justify-content: center;
  align-items: center;

  border-bottom: ${({ isActive }) =>
    isActive ? "2px solid black" : "2px solid #e7e7e7"};
  outline: none;
`;
const Content = styled.div`
  margin-top: 20px;
`;
const Post = styled.img`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 10px;
`;
const Feed = styled.img`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  margin: 15px;
`;

const Member = styled.div`
  display: flex;
  height: 5vh;
  width: 75vw;
  margin-left: 10px;
  align-items: center;
  margin-bottom: 16px;
`;
const Profile = styled.img`
  display: flex;
  width: 17%;
  margin-left: 7px;
`;

const MemberText = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 23px;
  margin: 0px 15px;
  font-weight: 600;
`;
const ProfileButton = styled.div`
  display: flex;
  background-color: black;
  color: white;
  border-radius: 30px;
  justify-content: center;
  font-family: "Pretendard-Regular";
  align-items: center;
  padding: 6px 12px;
`;
const Crown = styled.img`
  display: flex;
  width: 7vw;
  margin-left: 10px;
`;
