import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";

function App() {
  return (
    <Provider store={store}>
      <BackgroundWrap>
        <Background>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
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
