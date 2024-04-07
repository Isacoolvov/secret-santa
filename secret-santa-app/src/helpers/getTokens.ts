export function getAccessToken(): string | null {
    return sessionStorage.getItem("accessToken");
  }
  
  export function getRefreshToken(): string | null {
    return localStorage.getItem("refreshToken");
  }
  