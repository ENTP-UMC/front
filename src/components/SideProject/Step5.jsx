import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router";

const HomeContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

export default function Step5() {
  const [selectedPart, setSelectedPart] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handlePartClick = (part) => {
    setSelectedPart(part);
  };
  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/sideproject");
  };
  return (
    <HomeContainer>
      <Header />
      <Div>
        <Title>
          <TitleText>공유 일기장 사이드 프로젝트 팀원 모집</TitleText>
          <InputDiv>
            <InputText>이름</InputText>
            <InputName placeholder="이름을 입력해주세요" />
          </InputDiv>
          <InputDiv>
            <InputText>자기소개</InputText>
            <InputIntroduce placeholder="자기소개를 적어주세요." />
          </InputDiv>
          <InputDiv>
            <InputText>지원 파트</InputText>
            <ButtonWrap>
              <Part
                onClick={() => handlePartClick("planning")}
                selected={selectedPart === "planning"}
              >
                기획
              </Part>
              <Part
                onClick={() => handlePartClick("design")}
                selected={selectedPart === "design"}
              >
                디자인
              </Part>
              <Part
                onClick={() => handlePartClick("frontend")}
                selected={selectedPart === "frontend"}
              >
                프론트엔드
              </Part>
              <Part
                onClick={() => handlePartClick("backend")}
                selected={selectedPart === "backend"}
              >
                백엔드
              </Part>
            </ButtonWrap>
          </InputDiv>
          <InputDiv>
            <InputText>포트폴리오 링크</InputText>
            <InputName placeholder="링크를 첨부해주세요." />
          </InputDiv>
        </Title>
        <NextButton onClick={handleApplyClick}>프로젝트 지원하기</NextButton>
        {isModalOpen && (
          <ModalContainer>
            <ModalContent>
              <ModalText>지원이 완료되었습니다.</ModalText>
              <ConfirmButton onClick={handleCloseModal}>확인</ConfirmButton>
            </ModalContent>
          </ModalContainer>
        )}
      </Div>
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
const InputDiv = styled.div`
  display: flex;
  width: 90vw;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 13px;
`;
const InputText = styled.div`
  display: flex;
  font-family: "Pretendard-Regular";
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const InputName = styled.input`
  display: flex;
  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-family: "Pretendard-Regular";
  width: 85vw;
  height: 6vh;
`;

const InputIntroduce = styled.input`
  display: flex;
  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-family: "Pretendard-Regular";
  height: 20vh;
  width: 85vw;
`;
const ButtonWrap = styled.div`
  display: flex;
`;
const Part = styled.div`
  border-radius: 5px;
  background: ${({ selected }) => (selected ? "black" : "#d9d9d9")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  margin-right: 10px;
  padding: 4px 6px;
  cursor: pointer;
`;

const NextButton = styled.div`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  border-radius: 10px;
  background: #02ff70;
  position: absolute;
  bottom: 20px;
  font-family: "Pretendard-Regular";
  font-size: 20px;
  font-weight: 600;
  justify-content: center;
  padding: 10px 0px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 배경색 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
`;

const ModalText = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const ConfirmButton = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid #000;
  background: white;
  color: black;
  font-family: "Pretendard-Regular";
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: black;
    color: white;
  }
`;
