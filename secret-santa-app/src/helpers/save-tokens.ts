interface data {
  accessTokens: "string";
  refreshTokens: "string";
}
export default function saveTokens(data: data) {
  sessionStorage.setItem("accessToken", data.refreshTokens);
  localStorage.setItem("refreshToken", data.refreshTokens);
}
