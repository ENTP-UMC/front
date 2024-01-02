import React from 'react';
import styled from "styled-components";
import Header from "../Header/Header.jsx";
import goBack from "../../assets/img/goback.png";
import { useNavigate } from "react-router-dom";

const ClubCreate2Container = styled.div`
  padding-top: 4.3125rem; /* 헤더의 높이만큼 여백을 추가합니다. */
`;

export default function ClubCreate2() {

    const navigate = useNavigate();

    return (
        <ClubCreate2Container>
                <Header />
                <button onClick={()=>navigate(-1)} style={{ border: 'none', padding: 12, background: 'none' }}>
                    <img src={goBack} alt="goBack"/>
                </button>
        </ClubCreate2Container>
    )
}
