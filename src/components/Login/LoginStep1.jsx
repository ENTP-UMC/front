import React from "react";
import styled from "styled-components";
import next from "../../assets/img/next.png";

export default function LoginStep1() {
  return (
    <Div>
      <Content>
        <Text>닉네임과 이름을 입력해주세요. </Text>
        <Input placeholder="ex.mc/유엠씨"></Input>
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
`;
