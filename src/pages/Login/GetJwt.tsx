import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetJwt = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(";").shift();
      }
      return undefined;
    };

    const jwtToken = getCookie("jwtToken");
    if (jwtToken) {
      localStorage.setItem("jwtToken", jwtToken);
      console.log("JWT 저장됨: ", jwtToken);
      navigate("/"); // 메인 페이지로 리다이렉트
    } else {
      console.error("JWT 토큰을 찾을 수 없습니다.");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Processing JWT...</h1>
    </div>
  );
};

export default GetJwt;
