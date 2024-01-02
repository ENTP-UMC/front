import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style/StudyPost.css";
import { IMAGES } from "../constants/images";

export default function StudyPost() {
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
    <div className="studyPost">
      <img
        onClick={() => navigate(-1)}
        className="back"
        src={IMAGES.goback}
        alt="back"
      />

      <div className="studyPost__title">제목</div>
      <input
        className="title-input"
        type="string"
        placeholder="제목을 입력해주세요"
      />

      <div className="studyPost__title">모집 분야 / 인원</div>
      <input className="title-input" type="string" placeholder="0명 이상" />

      <div className="studyPost__title">
        모집 분야 / 프론트엔드 / 백엔드 / 진행방식
      </div>
      <input className="title-input" type="string" placeholder="#태그" />

      <div className="studyPost__title">자세한 설명</div>
      <input
        className="info-input"
        type="string"
        placeholder={`사이드 프로젝트에 대해 간단히 소개해주세요`}
      />

      <div className="studyPost__title">카카오톡 오픈채팅 링크</div>
      <input
        className="title-input"
        type="string"
        placeholder="오픈채팅 링크를 붙여넣어주세요."
      />

      <Link to={`/study4`} style={{ textDecoration: "none" }}>
        <div className="studyPost__btn">등록</div>
      </Link>
    </div>
  );
}
