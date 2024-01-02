<<<<<<< HEAD
import React, { useState } from 'react';
import Header from "../components/Header/Header";

export default function Thunder() {
  const [activeTab, setActiveTab] = useState('Long-Term');
  
  const handleClick = (tab) => {
    setActiveTab(tab);
  }
  
  return (
    <div>
      <Header />
      <h2 style={{color: 'black', fontSize: 25, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>UMC 스몰팟</h2>
      <div>
        <button onClick={() => handleClick('Long-Term')} style={{color: activeTab === 'Long-Term' ? 'red' : 'black'}}>Long-Term</button>
        <button onClick={() => handleClick('Thunder')} style={{color: activeTab === 'Thunder' ? 'red' : 'black'}}>Thunder</button>
      </div>
      {activeTab === 'Long-Term' && <div>Long-Term</div>}
      {activeTab === 'Thunder' && <div>Thunder</div>}
    </div>
=======
import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const ThunderContainer = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

export default function Home() {
  return (
    <ThunderContainer>
      <Header />
      <h1>Thunder</h1>
    </ThunderContainer>
>>>>>>> origin/develop
  );
}
