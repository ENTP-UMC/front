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
import LoginStep1 from "./components/Login/LoginStep1";
import LoginStep2 from "./components/Login/LoginStep2";
import LoginStep3 from "./components/Login/LoginStep3";
import LoginStep4 from "./components/Login/LoginStep4";
import Mypage2 from "./components/Mypage/Mypage2";
import Mypage3 from "./components/Mypage/Mypage3";
import Diary from "./pages/Diary";
import SideProjectPost from "./pages/SideProjectPost";
import ClubCreate from "./components/Thunder/ClubCreate";

function App() {
  return (
    <Provider store={store}>
      <BackgroundWrap>
        <Background>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/1" element={<LoginStep1 />} />
              <Route path="/login/2" element={<LoginStep2 />} />
              <Route path="/login/3" element={<LoginStep3 />} />
              <Route path="/login/4" element={<LoginStep4 />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/mypage/2" element={<Mypage2 />} />
              <Route path="/mypage/3" element={<Mypage3 />} />
              <Route path="/diary" element={<Diary />} />

              <Route path="/sideproject" element={<SideProject />} />
              <Route path="/sideprojectPost" element={<SideProjectPost />} />
              <Route path="/study" element={<Study />} />
              <Route path="/thunder" element={<Thunder />} />
              <Route path="/ClubCreate" element={<ClubCreate />} />
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
