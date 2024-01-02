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
  );
}
