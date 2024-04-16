// export function getGameId(): string | null {
//     return sessionStorage.getItem("id");
//   }
  
  export function localGameId(): string | null {
    return localStorage.getItem("GameId");
  }
  