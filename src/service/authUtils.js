export const handleLogout = (navigate) => {
  // LocalStorage에서 Refresh Token 삭제
  localStorage.removeItem("accessToken");
  // 로그인 페이지로 이동
  navigate("/joinpage");
};
