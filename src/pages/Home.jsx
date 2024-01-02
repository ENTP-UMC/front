import React from "react";
import styled from "styled-components";
import menu from "../assets/img/menu.png";
import logo from "../assets/img/logo.png";
import my from "../assets/img/mypage.png";

export default function Home() {
  return (
    <div>
      <Header>
        <img src={menu} alt="menu" />
        <img src={logo} alt="logo" />
        <img src={my} alt="내 프로필" />
      </Header>
    </div>
  );
}

const Header = styled.div`
  display: flex;
  background-color: black;
  width: 100%;
  height: 10vh;
  justify-content: space-around;
  align-items: center;
`;
