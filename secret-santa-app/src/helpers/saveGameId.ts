interface Tokens {
  gameId: string;
  id:string
}

// export default function saveGameId(data: Tokens) {
//   sessionStorage.setItem("id", data.gameId);
// }

export default function localsaveGameId(data: Tokens) {
  localStorage.setItem("id", data.gameId);
}
