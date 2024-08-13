import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GetJwt = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const exchangeToken = async () => {
      try {
        // URL에서 encoded access token 추출
        const urlParams = new URLSearchParams(location.search);
        const encodedToken = urlParams.get("encodedToken");

        if (!encodedToken) {
          throw new Error("Encoded token not found in URL");
        }

        // 서버에 encoded token을 전송하여 실제 access token 요청
        const response = await fetch("/api/auth/exchange-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ encodedToken }),
          credentials: "include", // 쿠키 포함 (refresh token을 위해)
        });

        if (!response.ok) {
          throw new Error("Failed to exchange token");
        }

        const data = await response.json();

        if (data.accessToken) {
          // 실제 Access Token을 안전하게 저장
          localStorage.setItem("accessToken", data.accessToken);
          console.log("Access token received and stored");

          // URL에서 encodedToken 파라미터 제거
          window.history.replaceState({}, document.title, "/get-jwt");

          navigate("/"); // 홈 페이지로 리다이렉트
        } else {
          throw new Error("Access token not found in response");
        }
      } catch (err: any) {
        console.error("Error exchanging token:", err);
        setError(err.message);
        // 에러 발생 시 로그인 페이지로 리다이렉트 (선택적)
        navigate("/joinpage");
      } finally {
        setLoading(false);
      }
    };

    exchangeToken();
  }, [navigate, location]);

  if (loading) {
    return <div>토큰 교환 중...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  return null;
};

export default GetJwt;
