interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export default function saveTokens(data: Tokens) {
  sessionStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
}
