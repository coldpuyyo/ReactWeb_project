import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { LogoutBtn } from './Logoutstyle';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // 로그아웃 처리 로직을 구현합니다.

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("storeid");
        // 페이지 이동
        navigate("/");
    };

    return (
        <LogoutBtn onClick={handleLogout}>
            로그아웃&nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
        </LogoutBtn>
    );
};

export default Logout;