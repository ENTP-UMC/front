import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../style/Study.css";
import { IMAGES } from "../constants/images";

export default function Study() {
  const [activeTab, setActiveTab] = useState(1); // 현재 활성화된 탭의 인덱스
  const [sortBy, setSortBy] = useState("latest"); // 최신순 기본값으로 설정

  const tagContents = [
    ["기획", "프론트", "백", "디자인"],
    ["Web", "iOS", "Android"],
    ["SpringBoot", "Node.js"],
    // ... 다른 태그들에 해당하는 배열
  ];

  const posts = [
    {
      id: 1,
      nickname: "닉네임",
      title: "웹개발 취준생을 위한 포트폴리오 스터디 모집",
      date: "2022-01-01",
      people: "모집 인원 : 5명 이상",
      scrapCount: 10,
      tag: ["프론트엔드", "JavaScript"],
    },
    {
      id: 2,
      nickname: "닉네임",
      title: "웹개발 취준생을 위한 포트폴리오 스터디 모집",
      date: "2022-01-05",
      people: "모집 인원 : 5명 이상",
      scrapCount: 5,
      tag: ["프론트엔드", "JavaScript"],
    },
    {
      id: 3,
      nickname: "닉네임",
      title: "웹개발 취준생을 위한 포트폴리오 스터디 모집",
      date: "2022-01-03",
      people: "모집 인원 : 5명 이상",
      scrapCount: 15,
      tag: ["프론트엔드", "JavaScript"],
    },
    // ... 다른 글들
  ];

  const [scrapStates, setScrapStates] = useState(
    posts.reduce((acc, post) => {
      acc[post.id] = false;
      return acc;
    }, {})
  );

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const handleToggle = (postId) => {
    setScrapStates((prevStates) => ({
      ...prevStates,
      [postId]: !prevStates[postId],
    }));
  };

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
    <div className="study">
      <Header />
      <div className="study__tag">
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
          {tagContents[activeTab - 1].map((tag, index) => (
            <span key={index} className="tag-content-item">
              {tag}
            </span>
          ))}
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

      <div className="study-list">
        {sortedPosts().map((post) => (
          <Link
            to={`/study4`}
            className="study-list__item"
            key={post.id}
            style={{ textDecoration: "none" }}
          >
            <div className="item-writer">
              <img
                className="profile_img"
                src={IMAGES.profile_img}
                alt="profile_img"
                style={{ marginRight: "0.31rem" }}
              />
              <span>{post.nickname}</span>
            </div>

            <div className="item-title">
              <span>{post.title}</span>
            </div>

            <div className="item-people">{post.people}</div>

            <div className="item-process">{post.process}</div>

            <div className="item-etc">
              <div className="item-tag">
                {post.tag.map((tag, index) => (
                  <span key={index} className="item-tag__name">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="scrap">
                <img
                  className="scrapButton"
                  src={
                    scrapStates[post.id]
                      ? IMAGES.scrap_after
                      : IMAGES.scrap_before
                  }
                  alt="Scrap Button"
                  onClick={() => handleToggle(post.id)}
                />
                <span className="scrapCount">{post.scrapCount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
