import React, { useState } from "react";
import Header from "../components/Header/Header";
import "../style/SideProject.css";
import { IMAGES } from "../constants/images";

export default function SideProject() {
  const [activeTab, setActiveTab] = useState(1); // 현재 활성화된 탭의 인덱스

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const [sortBy, setSortBy] = useState("latest"); // 최신순 기본값으로 설정

  const posts = [
    { id: 1, title: "글 1", date: "2022-01-01", scrapCount: 10 },
    { id: 2, title: "글 2", date: "2022-01-05", scrapCount: 5 },
    { id: 3, title: "글 3", date: "2022-01-03", scrapCount: 15 },
    // ... 다른 글들
  ];

  // 정렬 기준에 따라 글 목록을 동적으로 정렬하는 함수
  const sortedPosts = () => {
    if (sortBy === "latest") {
      return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "scrap") {
      return posts.sort((a, b) => b.scrapCount - a.scrapCount);
    }
    return posts;
  };
  return (
    <div className="sideProject">
      <Header />
      <div className="sideProject__tag">
        <div className="tag-title">
          <img
            className="tag-symbol"
            src={IMAGES.symbols_tag}
            alt="symbols_tag"
          />
          <span className="tag-message">태그를 추가해 검색해보세요</span>
        </div>

        <div className="tag-buttons">
          <button
            onClick={() => handleTabClick(1)}
            className={`tag-button__item ${activeTab === 1 ? "active" : ""}`}
          >
            분야
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={`tag-button__item ${activeTab === 2 ? "active" : ""}`}
          >
            프론트엔드
          </button>
          <button
            onClick={() => handleTabClick(3)}
            className={`tag-button__item ${activeTab === 3 ? "active" : ""}`}
          >
            백엔드
          </button>
        </div>

        <div className="tag-line"></div>

        <div className="tag-content">
          {activeTab === 1 && <p>탭 1의 내용</p>}
          {activeTab === 2 && <p>탭 2의 내용</p>}
          {activeTab === 3 && <p>탭 3의 내용</p>}
        </div>
      </div>

      <div className="filter">
        <img
          className="filter_symbol"
          src={IMAGES.filter_symbol}
          alt="filter_symbol"
        />
        <select
          className="sortDropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="latest">최신순</option>
          <option value="scrap">스크랩순</option>
        </select>
      </div>

      <div>
        <ul>
          {sortedPosts().map((post) => (
            <li key={post.id}>
              <span>{post.title}</span>
              <span>{post.date}</span>
              <span>스크랩 수: {post.scrapCount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
