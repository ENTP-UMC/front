import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import SideProject from "./pages/SideProject";
import Study from "./pages/Study";
import Thunder from "./pages/Thunder";

function App() {
  return (
    <Provider store={store}>
      <BackgroundWrap>
        <Background>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/sideproject" element={<SideProject />} />
              <Route path="/study" element={<Study />} />
              <Route path="/thunder" element={<Thunder />} />
            </Routes>
          </BrowserRouter>
        </Background>
      </BackgroundWrap>
    </Provider>
  );
}

export default App;

const BackgroundWrap = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background: linear-gradient(180deg, #ffd25d 0%, #ff984b 100%);
`;
//Background : 모바일로 보이는 영역
const Background = styled.div`
  max-width: 680px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
