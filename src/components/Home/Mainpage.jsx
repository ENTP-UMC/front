import React from "react";
import styled from "styled-components";
import icon1 from "../../assets/img/mainpage1.png";
import icon2 from "../../assets/img/mainpage2.png";
import icon3 from "../../assets/img/mainpage3.png";
import search from "../../assets/img/search.png";
import { useNavigate } from "react-router-dom";

export default function Mainpage() {
  const navigate = useNavigate();
  const handleProject = () => {
    navigate("/sideproject");
  };
  const handleStudy = () => {
    navigate("/study");
  };
  const handleThunder = () => {
    navigate("/thunder");
  };
  return (
    <div>
      <Navigate>
        <IconWrap onClick={handleProject}>
          <Icon src={icon1} />
          <IconText>프로젝트</IconText>
        </IconWrap>
        <IconWrap onClick={handleStudy}>
          <Icon src={icon2} />
          <IconText>스터디</IconText>
        </IconWrap>
        <IconWrap onClick={handleThunder}>
          <Icon src={icon3} />
          <IconText>소모임</IconText>
        </IconWrap>
      </Navigate>
      <Bottom>
        <SearchImg src={search} />
        <Search placeholder="프로젝트/스터디/소모임 검색" />
      </Bottom>
      <HotContainer>
        <Title>지금 HOT한 스터디 🔥</Title>
        <StudyContainer>
          <Study>
            <Status>모집중</Status>
            <StudyText1>
              정보 처리 기사 스터디
              <bn />
              모집합니다
            </StudyText1>
            <StudyText2>
              모집 인원 : 1명/5명
              <bn />
              진행 방식 : 온라인 <bn />
              예상 기간 : 3개월
            </StudyText2>
          </Study>
          <Study
            style={{
              backgroundColor: "black",
            }}
          >
            <Status
              style={{
                color: "black",
                backgroundColor: "#02FF70",
              }}
            >
              모집중
            </Status>
            <StudyText1
              style={{
                color: "white",
              }}
            >
              웹개발 취준생을 위한
              <bn />
              포트폴리오 스터디 모집
            </StudyText1>
            <StudyText2
              style={{
                color: "white",
              }}
            >
              모집 인원 : 1명/5명
              <bn />
              진행 방식 : 온라인 <bn />
              예상 기간 : 3개월
            </StudyText2>
          </Study>
        </StudyContainer>
      </HotContainer>
      <HotContainer>
        <Title>지금 HOT한 프로젝트 🔥</Title>
        <StudyContainer>
          <Study
            style={{
              backgroundColor: "black",
            }}
          >
            <Status
              style={{
                color: "black",
                backgroundColor: "#02FF70",
              }}
            >
              모집중
            </Status>
            <StudyText1
              style={{
                color: "white",
              }}
            >
              공유 일기장
              <bn />
              사이드 프로젝트
              <bn />
              팀원 모집
            </StudyText1>
            <StudyText2
              style={{
                color: "white",
              }}
            >
              모집 파트 : IOS, 서버(Spring)
              <bn />
              예상 기간 : 3개월
            </StudyText2>
          </Study>
          <Study>
            <Status>모집중</Status>
            <StudyText1>
              패션 커뮤니티
              <bn />
              사이드 프로젝트
              <bn />
              팀원 모집
            </StudyText1>
            <StudyText2>
              모집 파트 : IOS, 서버(Spring)
              <bn />
              예상 기간 : 3개월 <bn />
            </StudyText2>
          </Study>
        </StudyContainer>
      </HotContainer>
      <HotContainer>
        <Title>취미, 소모임은 어때요?</Title>
        <StudyContainer>
          <Study>
            <Status>모집중</Status>
            <StudyText1>
              정보 처리 기사 스터디
              <bn />
              모집합니다
            </StudyText1>
            <StudyText2>
              모집 인원 : 1명/5명
              <bn />
              진행 방식 : 온라인 <bn />
              예상 기간 : 3개월
            </StudyText2>
          </Study>
          <Study
            style={{
              backgroundColor: "black",
            }}
          >
            <Status
              style={{
                color: "black",
                backgroundColor: "#02FF70",
              }}
            >
              모집중
            </Status>
            <StudyText1
              style={{
                color: "white",
              }}
            >
              정보 처리 기사 스터디
              <bn />
              모집합니다
            </StudyText1>
            <StudyText2
              style={{
                color: "white",
              }}
            >
              모집 인원 : 1명/5명
              <bn />
              진행 방식 : 온라인 <bn />
              예상 기간 : 3개월
            </StudyText2>
          </Study>
        </StudyContainer>
      </HotContainer>
    </div>
  );
}

const Navigate = styled.div`
  display: flex;
  height: 20vh;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  font-family: "Pretendard-Regular";
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img`
  display: flex;
  margin: 10px;
  max-width: 40%;
`;
const IconText = styled.div`
  display: flex;
  color: white;
`;
const Search = styled.input`
  display: flex;
  justify-content: center;
  border-radius: 30px;
  border: 2px solid #00ff6f;
  background: #fff;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  width: 80vw;
  height: 5vh;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  text-align: center;
  margin: 10px;
`;
const SearchImg = styled.img`
  display: flex;
  position: absolute;
  left: 50px;
  margin-top: 2px;
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
`;
const Status = styled.div`
  display: flex;
  width: 50%;
  height: 18%;
  border-radius: 20px;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 7px;
`;
const StudyText1 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  margin: 10px;
`;
const StudyText2 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
`;
