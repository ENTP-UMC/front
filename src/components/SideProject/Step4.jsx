import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import profile from "../../assets/img/profile.png";
import sideproject1 from "../../assets/img/sideproject1.png";
import sideproject2 from "../../assets/img/sideprojectt2.png";
import side3 from "../../assets/img/side3.png";
import side4 from "../../assets/img/side4.png";
import { useNavigate } from "react-router";

const HomeContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

export default function Step4() {
  const navigate = useNavigate();
  const handleStep5 = () => {
    navigate("/step5");
  };
  return (
    <HomeContainer>
      <Header />
      <Div>
        <Title>
          <TitleText>공유 일기장 사이드 프로젝트 팀원 모집</TitleText>
          <Profile>
            <ProfileImg src={profile} />
            <ProfileText>인유</ProfileText>
          </Profile>
        </Title>
        <Container1 src={sideproject1} />
        <Container1 src={sideproject2} />
        <Container2 src={side3} />
        <Container2 onClick={handleStep5} src={side4} />
      </Div>
      <Line />
      <Comment>댓글 0</Comment>
    </HomeContainer>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
display:flex
flex-direction:column;
width:85vw;
margin:0 auto;
margin-top:20px;

`;
const TitleText = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 21px;
  font-weight: 600;
`;
const Profile = styled.div`
  display: flex;

  align-items: center;
`;
const ProfileImg = styled.img`
  display: flex;
  width: 8vw;
`;
const ProfileText = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  margin: 10px;
  font-weight: 600;
`;
const Container1 = styled.img`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  margin-top: 20px;
`;
const Container2 = styled.img`
  display: flex;
  width: 90vw;
  margin-top: 13px;
`;

const Line = styled.div`
background: #E7E7E7;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);s
width:100vw;
height:1px;
margin:10px;
;`;
const Comment = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;
