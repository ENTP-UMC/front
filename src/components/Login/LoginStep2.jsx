import React from "react";
import styled from "styled-components";
import next from "../../assets/img/next.png";
import { useNavigate } from "react-router-dom";
import { setUniv } from "../../redux/loginSlice";
import { useDispatch } from "react-redux";

export default function LoginStep2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleStep1Next = () => {
    navigate("/login/3");
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(setUniv(value));
  };

  return (
    <Div>
      <Content>
        <Text>학교를 입력해주세요. </Text>
        <Input
          onChange={handleInputChange}
          placeholder="ex.유엠씨대학교"
        ></Input>
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
  font-family: "Pretendard-Regular";
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--main-2, #1a334d);
  font-family: "Pretendard-Regular";
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
  font-family: "Pretendard-Regular";
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
