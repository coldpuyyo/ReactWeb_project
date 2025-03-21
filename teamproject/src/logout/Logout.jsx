import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoutBtn = styled.button`
    margin-left: 180px;
`

const Logout = () => {
    const navigate = useNavigate();

	const handleLogout = () => {
    	sessionStorage.removeItem("token");
		sessionStorage.removeItem("email");
		sessionStorage.removeItem("storeid");
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