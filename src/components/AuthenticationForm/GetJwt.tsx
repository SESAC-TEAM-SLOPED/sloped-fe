import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios를 사용한다고 가정합니다.
import { serverUrl } from "../../constant/url";
const GetJwt = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const exchangeToken = async () => {
      try {
        // 서버에 refresh token을 사용하여 새로운 access token 요청
        const response = await axios.post(
          `${serverUrl}/api/auth/exchange-token`,
          {},
          {
            withCredentials: true, // 쿠키를 포함시키기 위해 필요합니다.
          },
        );

        if (response.status === 200) {
          const accessToken = response.headers["authorization"];
          if (accessToken && accessToken.startsWith("Bearer ")) {
            const token = accessToken.slice(7); // 'Bearer ' 제거
            localStorage.setItem("accessToken", token);
            console.log("New access token received and stored");

            // 홈 페이지로 리다이렉트
            navigate("/");
          } else {
            throw new Error("Access token not found in response headers");
          }
        } else {
          throw new Error("Failed to exchange token");
        }
      } catch (err: any) {
        console.error("Error exchanging token:", err);
        setError(err.message);
        // 에러 발생 시 로그인 페이지로 리다이렉트
        navigate("/joinpage");
      } finally {
        setLoading(false);
      }
    };

    exchangeToken();
  }, [navigate]);

  if (loading) {
    return <div>토큰 교환 중...</div>;
  }

  if (error) {
    return <div>오류 발생: {error}</div>;
  }

  return null;
};

export default GetJwt;
