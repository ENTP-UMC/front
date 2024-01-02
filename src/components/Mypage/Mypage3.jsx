import React, { useState } from "react";
import styled, { css } from "styled-components";
import profile from "../../assets/img/profile.png";
import { useNavigate } from "react-router-dom";
import HeaderWrap from "../../components/Header/Header";
import post1 from "../../assets/img/mypage글1.png";

export default function Mypage3() {
  const navigate = useNavigate();

  const handlenavigate1 = () => {
    navigate("/mypage");
  };
  const handlenavigate2 = () => {
    navigate("/mypage/2");
  };
  const handlenavigate3 = () => {
    navigate("/mypage/3");
  };

  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div>
      <Container />
      <HeaderWrap />
      <Header>
        <ProfileImg src={profile} />
        <TextWrap>
          <Text1>인유</Text1>
          <Text2>010-1234-5678</Text2>
        </TextWrap>
        <Edit>프로필 수정</Edit>
      </Header>
      <TabWrap>
        <Tab1 onClick={handlenavigate1}>나의 IN</Tab1>
        <Tab2 onClick={handlenavigate2}>내가 쓴 글</Tab2>
        <Tab3 onClick={handlenavigate3}>스크랩</Tab3>
      </TabWrap>
      <ButtonContainer>
        <Button
          isActive={activeButton === "button1"}
          onClick={() => handleButtonClick("button1")}
        >
          사이드 프로젝트
        </Button>
        <Button
          isActive={activeButton === "button2"}
          onClick={() => handleButtonClick("button2")}
        >
          스터디
        </Button>
        <Button
          isActive={activeButton === "button3"}
          onClick={() => handleButtonClick("button3")}
        >
          소모임
        </Button>
      </ButtonContainer>
      <Content>
        {activeButton === "button1" && (
          <div>
            <Post src={post1} />
            <Post src={post1} />
            <Post src={post1} />
            <Post src={post1} />
          </div>
        )}

        {activeButton === "button2" && (
          <div>
            <Post src={post1} />
          </div>
        )}
        {activeButton === "button3" && (
          <div>
            <Post src={post1} />

            <Post src={post1} />
          </div>
        )}
      </Content>
    </div>
  );
}
const Container = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #f1f1f1;
  height: 13vh;
  justify-content: center;
  align-items: center;
`;
const ProfileImg = styled.img`
  display: flex;
  max-width: 17%;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Text1 = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 26px;
  font-weight: 600;
`;
const Text2 = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-weight: 300;
`;
const Edit = styled.div`
  border-radius: 30px;
  border: 1px solid #595959;
  width: 30vw;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40%;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const TabWrap = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  justify-content: center;
  align-items: center;
  height: 7vh;
`;
const Tab1 = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  border-bottom: 2px solid #e7e7e7;
  font-size: 20px;
  padding: 7px;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
const Tab2 = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  border-bottom: 2px solid #e7e7e7;
  font-size: 20px;

  width: 30%;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;

const Tab3 = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  border-bottom: 2px solid black;
  font-size: 20px;
  padding: 7px;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  font-family: "Pretendard-Regular";
  border-radius: 20px;
  border: 1px solid #000;
  background: ${({ isActive }) => (isActive ? "#000" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
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
