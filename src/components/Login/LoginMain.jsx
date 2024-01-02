import React from "react";
import loginimg from "../../assets/img/loginmain.png";
import styled from "styled-components";
import kakao from "../../assets/img/kakao11.png";
import google from "../../assets/img/google11.png";
import apple from "../../assets/img/apple11.png";
import { useNavigate } from "react-router-dom";

export default function LoginMain() {
  const navigate = useNavigate();
  const handleKakao = () => {
    navigate("/login/1");
  };

  return (
    <Div>
      <Logo>
        <Img src={loginimg} />
      </Logo>
      <SocialLogin>
        <Login22 src={kakao} />
        <Login22 src={google} />
        <Login22 src={apple} />
      </SocialLogin>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #231f20;
`;
const Logo = styled.div`
  display: flex;
  height: 50vh;
  width: 100vw;

  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  display: flex;
  max-width: 100%;
`;

const SocialLogin = styled.div`
  display: flex;
  height: 30vh;

  width: 100vw;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Login22 = styled.img`
  display: flex;
  max-width: 90vw;
  margin: 5px;
`;
