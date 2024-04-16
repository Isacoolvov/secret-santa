interface Tokens {
  gameId: string;
  id:string
}

// export default function saveGameId(data: Tokens) {
//   sessionStorage.setItem("id", data.gameId);
// }

export default function localsaveGameId(data:string) {
  localStorage.setItem("id", data);
}
