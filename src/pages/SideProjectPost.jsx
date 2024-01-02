import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/SideProjectPost.css";
import { IMAGES } from "../constants/images";

export default function SideProjectPost() {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(0);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);
  const [design, setDesign] = useState(0);
  const [etc, setEtc] = useState(0);

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };
  const handleFrontChange = (e) => {
    setFront(e.target.value);
  };
  const handleBackChange = (e) => {
    setBack(e.target.value);
  };
  const handleDesignChange = (e) => {
    setDesign(e.target.value);
  };
  const handleEtcChange = (e) => {
    setEtc(e.target.value);
  };

  return (
    <div className="sideProjectPost">
      <img
        onClick={() => navigate(-1)}
        className="back"
        src={IMAGES.goback}
        alt="back"
      />

      <div className="sideProjectPost__title">제목</div>
      <input
        className="title-input"
        type="string"
        placeholder="제목을 입력해주세요"
      />

      <div className="sideProjectPost__title">모집 분야 / 인원</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="number-input-container">
          <span className="label" style={{ marginRight: "0.62rem" }}>
            기획
          </span>
          <input
            className="number-input"
            type="number"
            value={plan}
            onChange={handlePlanChange}
          />
        </div>
        <div className="number-input-container">
          <span className="label" style={{ marginRight: "0.62rem" }}>
            디자인
          </span>
          <input
            className="number-input"
            type="number"
            value={design}
            onChange={handleDesignChange}
          />
        </div>
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", marginTop: "0.5rem" }}
      >
        <div className="number-input-container">
          <span className="label" style={{ marginRight: "0.62rem" }}>
            프론트엔드
          </span>
          <input
            className="number-input"
            type="number"
            value={front}
            onChange={handleFrontChange}
          />
        </div>
        <div className="number-input-container">
          <span className="label" style={{ marginRight: "0.62rem" }}>
            백엔드
          </span>
          <input
            className="number-input"
            type="number"
            value={back}
            onChange={handleBackChange}
          />
        </div>
        <div className="number-input-container">
          <span className="label" style={{ marginRight: "0.62rem" }}>
            기타
          </span>
          <input
            className="number-input"
            type="number"
            value={etc}
            onChange={handleEtcChange}
          />
        </div>
      </div>

      <div className="sideProjectPost__title">
        모집 분야 / 프론트엔드 / 백엔드 / 진행방식
      </div>
      <input className="title-input" type="string" placeholder="#태그" />

      <div className="sideProjectPost__title">자세한 설명</div>
      <input
        className="info-input"
        type="string"
        placeholder={`사이드 프로젝트에 대해 간단히 소개해주세요`}
      />

      <div className="sideProjectPost__title">카카오톡 오픈채팅 링크</div>
      <input
        className="title-input"
        type="string"
        placeholder="오픈채팅 링크를 붙여넣어주세요."
      />

      <Link to={`/step4`} style={{ textDecoration: "none" }}>
        <div className="sideProjectPost__btn">등록</div>
      </Link>
    </div>
  );
}
