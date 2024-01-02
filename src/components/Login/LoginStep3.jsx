import React from "react";
import styled from "styled-components";
import next from "../../assets/img/next.png";
import { useNavigate } from "react-router-dom";

export default function LoginStep3() {
  const navigate = useNavigate();
  const handleStep1Next = () => {
    navigate("/login/4");
  };

  return (
    <Div>
      <Content>
        <Text>전화번호를 입력해주세요. </Text>
        <Input placeholder="ex. 010-0000-0000"></Input>
        <Button onClick={handleStep1Next}>다음</Button>
      </Content>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  color: var(--main-2, #1a334d);
  font-family: Pretendard;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--main-2, #1a334d);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  height: 80vh;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  border-bottom: 1px solid black;
  font-family: Pretendard;
  position: relative;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  border-radius: 50px;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 60%;
`;
