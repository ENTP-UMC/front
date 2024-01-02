import React from "react";
import styled from "styled-components";
import profile from "../../assets/img/profile.png";
import { useNavigate } from "react-router-dom";

export default function MypageMain() {
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
  const handlediary = () => {
    navigate("/diary", {
      state: { title: "Our 다이어리", des: "공유 일기장 사이드 프로젝트" },
    });
  };

  const handlediary2 = () => {
    navigate("/diary", {
      state: { title: "Look Book", des: "패션 커뮤니티 사이드 프로젝트" },
    });
  };

  const handlediary3 = () => {
    navigate("/diary", {
      state: {
        title: "웹 포트폴리오 ",
        des: "웹 개발 포트폴리오  스터디",
      },
    });
  };
  const handlediary4 = () => {
    navigate("/diary", {
      state: { title: "정보처리기사", des: "정보 처리기사 스터디" },
    });
  };
  const handlediary5 = () => {
    navigate("/diary", {
      state: { title: "클라이밍", des: "클라이밍 소모임" },
    });
  };
  const handlediary6 = () => {
    navigate("/diary", {
      state: { title: "배드민턴", des: "배드민턴 소모임" },
    });
  };
  return (
    <div>
      <Header>
        <ProfileImg src={profile} />
        <TextWrap>
          <Text1>인유</Text1>
          <Text2>010-1234-5678</Text2>
        </TextWrap>
        <Edit></Edit>
      </Header>
      <TabWrap>
        <Tab1 onClick={handlenavigate1}>나의 IN</Tab1>
        <Tab2 onClick={handlenavigate2}>내가 쓴 글</Tab2>
        <Tab3 onClick={handlenavigate3}>스크랩</Tab3>
      </TabWrap>

      <HotContainer>
        <Title>사이드 프로젝트</Title>
        <StudyContainer>
          <Study onClick={handlediary}>
            <StudyText1>Our 다이어리</StudyText1>
            <StudyText2>
              공유 일기장
              <bn />
              사이드 프로젝트
            </StudyText2>
          </Study>
          <Study
            onClick={handlediary2}
            style={{
              backgroundColor: "black",
            }}
          >
            <StudyText1
              style={{
                color: "white",
              }}
            >
              Look Book
            </StudyText1>
            <StudyText2
              style={{
                color: "white",
              }}
            >
              패션 커뮤니티
              <bn />
              사이드 프로젝트
            </StudyText2>
          </Study>
        </StudyContainer>
      </HotContainer>
      <Line />
      <HotContainer>
        <Title>스터디</Title>
        <StudyContainer>
          <Study
            onClick={handlediary3}
            style={{
              backgroundColor: "black",
            }}
          >
            <StudyText1
              style={{
                color: "white",
              }}
            >
              웹개발 <br />
              포트폴리오 <br />
              스터디
            </StudyText1>
          </Study>
          <Study>
            <StudyText1 onClick={handlediary4}>정보처리기사 스터디</StudyText1>
          </Study>
        </StudyContainer>
      </HotContainer>
      <Line />
      <HotContainer>
        <Title>소모임</Title>
        <StudyContainer>
          <Study onClick={handlediary5}>
            <StudyText1>클라이밍</StudyText1>
          </Study>
          <Study
            onClick={handlediary6}
            style={{
              backgroundColor: "black",
            }}
          >
            <StudyText1
              style={{
                color: "white",
              }}
            >
              배드민턴
            </StudyText1>
          </Study>
        </StudyContainer>
      </HotContainer>
    </div>
  );
}

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

  width: 30vw;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40%;
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
  border-bottom: 2px solid black;
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
  border-bottom: 2px solid #e7e7e7;
  font-size: 20px;
  padding: 7px;
  width: 30%;
  justify-content: center;
  align-items: center;
`;

const HotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
`;

const Title = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 700;
  margin: 5px;
`;
const StudyContainer = styled.div`
  display: flex;
`;
const Study = styled.div`
  display: flex;
  width: 40vw;
  height: 40vw;
  background-color: #02ff70;
  margin: 10px;
  border-radius: 15px;
  flex-direction: column;
  font-family: "Pretendard-Regular";
  justify-content: center;
  align-items: center;
`;

const StudyText1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  margin: 10px;
`;
const StudyText2 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
`;

const Line = styled.div`
  width: 100vw;
  height: 1px;
  background: #e4e3e3;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  margin: 5px;
`;
