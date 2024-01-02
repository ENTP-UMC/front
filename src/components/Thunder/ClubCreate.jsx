import React from 'react';
import styled from "styled-components";
import Header from "../Header/Header.jsx";
import goBack from "../../assets/img/goback.png";
import { useNavigate } from "react-router-dom";

const ClubData = ['여행', '동네친구', '반려동물', '봉사활동', '음식', '운동', '코딩', '음악', '문화/예술', '게임'];

const ClubCreateContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

const QuestionText = styled.div`
    width: 188px;
    height: 21px;
    color: black;
    font-size: 12px;
    font-family: 'Pretendard-Regular';
    font-weight: 700;
    line-height: 21px;
    word-wrap: break-word;
    padding-left: 22px;
    margin: 3px 0;
`;

const InputContainer = styled.div`
    width: 361px;
    height: 38px;
    padding: 16px 10px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px #D9D9D9 solid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
    margin: 0 18px;
`;

const InputContainerIntro = styled.div`
    width: 361px;
    height: 125px;
    padding: 16px 10px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px #D9D9D9 solid;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
    margin: 0 18px;
`;

const Input = styled.input`
  width: 100%;
  border: none;

  ::placeholder {
    color: #C0C0C0;
    font-size: 13px;
    font-family: 'Pretendard-Regular';
    font-weight: 400;
  }
`;

const QuestionTagText = styled.div`
    width: 188px;
    height: 21px;
    color: black;
    font-size: 12px;
    font-family: 'Pretendard-Regular';
    font-weight: 700;
    line-height: 21px;
    word-wrap: break-word;
    padding-left: 22px;
    margin: 3px 0;
`;

const OuterTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: 3px 18px;
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
  font-family: 'Pretendard-Regular';
  font-weight: 500;
  word-wrap: break-word;
`;

export default function ClubCreate() {

    const navigate = useNavigate();

    return (
        <ClubCreateContainer>
            <Header />
            <button onClick={()=>navigate('/Thunder')} style={{ border: 'none', padding: 12, background: 'none' }}>
                <img src={goBack} alt="goBack"/>
            </button>
            <QuestionText>모임명</QuestionText>
            <InputContainer>
                <Input type="text" placeholder="모임명을 입력해주세요." />
            </InputContainer>

            <QuestionText>인원</QuestionText>
            <InputContainer>
                <Input type="text" placeholder="인원" />
            </InputContainer>

            <QuestionText>모집 기한</QuestionText>
            <InputContainer>
                <Input type="text" placeholder="2024.01.20 - 2024.01.20" />
            </InputContainer>

            <QuestionTagText>태그</QuestionTagText>
            <OuterTagContainer>
                {ClubData.map((data, index) =>
                    <TagContainer key={index}>
                    <TagText>{data}</TagText>
                    </TagContainer>
                )}
            </OuterTagContainer>

            <QuestionText>모임 소개</QuestionText>
            <InputContainerIntro>
                <Input type="text" placeholder="모임에 대해 간단히 소개해주세요." />
            </InputContainerIntro>

            <QuestionText>카카오톡 오픈채팅 링크</QuestionText>
            <InputContainer>
                <Input type="text" placeholder="오픈채팅 링크를 붙여넣어주세요." />
            </InputContainer>

            <button onClick={()=>navigate('/Thunder')} style={{width: '372px', height: '41px', background: '#02FF70', borderRadius: 10}}>
                등록하기
            </button>

        </ClubCreateContainer>
    )
}
