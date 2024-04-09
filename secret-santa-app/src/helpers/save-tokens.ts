interface Tokens {
  accessToken: string;
  refreshToken: string;
  null:"";
}

export default function saveTokens(data: Tokens) {
  sessionStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
  sessionStorage.setItem("delete", data.null);

}
